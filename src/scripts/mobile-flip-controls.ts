type PageFlipController = {
  flipNext: (corner?: "top" | "bottom") => void;
  flipPrev: (corner?: "top" | "bottom") => void;
  getState: () => string;
};

type EdgeSide = "left" | "right";

function getEdgeSide(target: EventTarget | null, clientX: number): EdgeSide | null {
  if (!(target instanceof Element)) return null;

  const page = target.closest<HTMLElement>(".catalog-page");
  if (!page || target.closest("[data-favorite-id]")) return null;

  const pageBounds = page.getBoundingClientRect();
  const cards = Array.from(page.querySelectorAll<HTMLElement>(".product-item"));
  const cardBounds = cards.map((card) => card.getBoundingClientRect());
  const edgeGap = 4;
  const fallbackWidth = Math.min(56, pageBounds.width * 0.1);
  const leftWidth = cardBounds.length
    ? Math.max(0, Math.min(...cardBounds.map((card) => card.left)) - pageBounds.left - edgeGap)
    : fallbackWidth;
  const rightWidth = cardBounds.length
    ? Math.max(0, pageBounds.right - Math.max(...cardBounds.map((card) => card.right)) - edgeGap)
    : fallbackWidth;

  if (clientX - pageBounds.left <= leftWidth) return "left";
  if (pageBounds.right - clientX <= rightWidth) return "right";
  return null;
}

export function initializeMobileFlipControls(book: HTMLElement, pageFlip: PageFlipController) {
  let gesture: { side: EdgeSide | null; startX: number; startY: number } | null = null;

  book.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    if (!touch) return;

    if (!(event.target instanceof Element) || !event.target.closest(".catalog-page") || event.target.closest("[data-favorite-id]")) {
      gesture = null;
      return;
    }

    gesture = {
      side: getEdgeSide(event.target, touch.clientX),
      startX: touch.clientX,
      startY: touch.clientY,
    };
  }, { passive: true });

  book.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    if (!touch || !gesture || pageFlip.getState() !== "read") return;

    const movedX = touch.clientX - gesture.startX;
    const movedY = touch.clientY - gesture.startY;
    const isHorizontalSwipe = Math.abs(movedX) >= 32 && Math.abs(movedX) > Math.abs(movedY) * 1.4;
    const isEdgeSwipe = gesture.side === "right" && movedX <= -12
      || gesture.side === "left" && movedX >= 12;
    const shouldFlipNext = (gesture.side === "right" && movedX <= -12) || (isHorizontalSwipe && movedX < 0);
    const shouldFlipPrevious = (gesture.side === "left" && movedX >= 12) || (isHorizontalSwipe && movedX > 0);
    gesture = null;

    if (isEdgeSwipe || isHorizontalSwipe) {
      if (shouldFlipNext) pageFlip.flipNext("bottom");
      if (shouldFlipPrevious) pageFlip.flipPrev("bottom");
    }
  }, { passive: true });
}
