function getPointerPosition(event: Event) {
  if (event instanceof TouchEvent) {
    const touch = event.touches[0] ?? event.changedTouches[0];
    return touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  if (event instanceof MouseEvent) {
    return { x: event.clientX, y: event.clientY };
  }

  return null;
}

export function initializeFlipGestureGuard() {
  const guardFlipStart = (event: Event) => {
    if (!(event.target instanceof Element)) return;

    const page = event.target.closest<HTMLElement>(".catalog-page");
    if (!page) return;

    // Favorite buttons must never start a page flip, including when the SVG itself is clicked.
    if (event.target.closest("[data-favorite-id]")) {
      event.stopPropagation();
      return;
    }

    const point = getPointerPosition(event);
    if (!point) return;

    const bounds = page.getBoundingClientRect();
    const x = point.x - bounds.left;
    const cards = Array.from(page.querySelectorAll<HTMLElement>(".product-item"));
    const cardBounds = cards.map((card) => card.getBoundingClientRect());
    const edgeGap = 4;
    const fallbackZoneWidth = Math.min(56, bounds.width * 0.1);
    const leftZoneWidth = cardBounds.length
      ? Math.max(0, Math.min(...cardBounds.map((card) => card.left)) - bounds.left - edgeGap)
      : fallbackZoneWidth;
    const rightZoneWidth = cardBounds.length
      ? Math.max(0, bounds.right - Math.max(...cardBounds.map((card) => card.right)) - edgeGap)
      : fallbackZoneWidth;
    const isPortrait = page.closest(".stf__wrapper")?.classList.contains("--portrait");
    const isLeftTurnZone = (isPortrait || page.classList.contains("--left")) && x <= leftZoneWidth;
    const isRightTurnZone = (isPortrait || page.classList.contains("--right")) && x >= bounds.width - rightZoneWidth;

    // PageFlip receives events on its parent. Only the narrow outer strips may start a flip.
    if (!isLeftTurnZone && !isRightTurnZone) {
      event.stopPropagation();
    }
  };

  document.addEventListener("mousedown", guardFlipStart, true);
  document.addEventListener("touchstart", guardFlipStart, { capture: true, passive: true });
}
