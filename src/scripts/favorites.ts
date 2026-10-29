const storageKey = "woodara-catalog-favorites";

function getFavorites(): Set<string> {
  try {
    const saved = localStorage.getItem(storageKey);
    return new Set(saved ? JSON.parse(saved) : []);
  } catch {
    return new Set();
  }
}

function saveFavorites(favorites: Set<string>) {
  localStorage.setItem(storageKey, JSON.stringify([...favorites]));
}

function updateButtons(favorites: Set<string>) {
  document.querySelectorAll<HTMLButtonElement>("[data-favorite-id]").forEach((button) => {
    const isFavorite = favorites.has(button.dataset.favoriteId ?? "");
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute("aria-label", isFavorite ? "Remove from favorites" : "Add to favorites");
  });
}

export function initializeFavorites() {
  const favorites = getFavorites();
  updateButtons(favorites);

  document.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>("[data-favorite-id]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const id = button.dataset.favoriteId;
    if (!id) return;

    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    saveFavorites(favorites);
    updateButtons(favorites);
  });
}
