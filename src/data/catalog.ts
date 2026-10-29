export type Product = {
  id: string;
  name: string;
  productCode: string;
  type: string;
  image: string;
  dimensions?: string;
  material?: string;
  color?: string;
  additionalSpecs?: string;
};

export type CategoryPage = {
  id: string;
  kind: "category";
  pageNumber: number;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type ProductsPage = {
  id: string;
  kind: "products";
  pageNumber: number;
  categoryLabel: string;
  productIds: string[];
};

export type CatalogPageData = CategoryPage | ProductsPage;

const placeholderImage = "/images/catalog/product-placeholder.svg";

export const products: Product[] = [
  { id: "ID-01-0003", name: "Clinton Chair", productCode: "ID-01-0003", type: "Dining Chair", image: "/images/card/ID-01-0003.png" },
  { id: "ID-01-0004", name: "Ello Chair", productCode: "ID-01-0004", type: "Dining Chair", image: "/images/card/ID-01-0004.png" },
  { id: "ID-01-0005", name: "Erva Chair", productCode: "ID-01-0005", type: "Dining Chair", image: "/images/card/ID-01-0005.png" },
  { id: "ID-01-0006", name: "Helvano Chair", productCode: "ID-01-0006", type: "Dining Chair", image: "/images/card/ID-01-0006.png" },
  { id: "ID-01-0007", name: "Montego Chair", productCode: "ID-01-0007", type: "Dining Chair", image: "/images/card/ID-01-0007.png" },
  { id: "ID-01-0008", name: "Seico Chair", productCode: "ID-01-0008", type: "Dining Chair", image: "/images/card/ID-01-0008.png"},
  { id: "ID-01-0029", name: "Lombok Chair", productCode: "ID-01-0029", type: "Dining Chair", image: "/images/card/ID-01-0029.png", dimensions: "W 80 × D 80 × H 105 cm" },
  { id: "ID-01-0035", name: "Tulum Chair", productCode: "ID-01-0035", type: "Dining Chair", image: "/images/card/ID-01-0035.png", dimensions: "W 58 × D 54 × H 76 cm" },
  { id: "ID-01-0036", name: "Dewi Chair", productCode: "ID-01-0036", type: "Dining Chair", image: "/images/card/ID-01-0036.png", dimensions: "W 58 × D 60 × H 78 cm" },
  { id: "ID-01-0037", name: "Janti Chair", productCode: "ID-01-0037", type: "Dining Chair", image: "/images/card/ID-01-0037.png", dimensions: "W 57 × D 58 × H 92 cm" },
  { id: "ID-01-0079", name: "CH-010", productCode: "ID-01-0079", type: "Dining Chair", image: "/images/card/ID-01-0079.png", dimensions: "W 66 × D 60 × H 74 cm" },
  { id: "ID-01-0080", name: "CH-017", productCode: "ID-01-0080", type: "Dining Chair", image: "/images/card/ID-01-0080.png", dimensions: "W 58 × D 53 × H 76 cm" },
  { id: "ID-01-0081", name: "CH-018", productCode: "ID-01-0081", type: "Dining Chair", image: "/images/card/ID-01-0081.png", dimensions: "W 57 × D 52 × H 75 cm" },
  { id: "ID-01-0084", name: "CH-074", productCode: "ID-01-0084", type: "Dining Chair", image: "/images/card/ID-01-0084.png", dimensions: "W 51 × D 59 × H 78 cm" },
  { id: "ID-01-0085", name: "CH-076", productCode: "ID-01-0085", type: "Dining Chair", image: "/images/card/ID-01-0085.png", dimensions: "W 46 × D 49 × H 79.5 cm" },
  { id: "ID-01-0086", name: "CH-085B", productCode: "ID-01-0086", type: "Dining Chair", image: "/images/card/ID-01-0086.png", dimensions: "W 41 × D 57.5 × H 75.5 cm" },
  { id: "ID-01-0087", name: "CH-095", productCode: "ID-01-0087", type: "Dining Chair", image: "/images/card/ID-01-0087.png", dimensions: "W 54 × D 56 × H 80 cm" },
  { id: "ID-01-0093", name: "Luna Chair", productCode: "ID-01-0093", type: "Dining Chair", image: "/images/card/ID-01-0093.png", dimensions: "W 62 × D 56 × H 75 cm", material: "Teak Wood", color: "Weathered Grey" },
  { id: "ID-01-0094", name: "Tully Chair Black", productCode: "ID-01-0094", type: "Dining Chair", image: "/images/card/ID-01-0094.png", dimensions: "W 53 × D 49 × H 78 cm", material: "Teak Wood", color: "Black" },
  { id: "ID-01-0095", name: "Tully Chair Natural", productCode: "ID-01-0095", type: "Dining Chair", image: "/images/card/ID-01-0095.png", dimensions: "W 53 × D 49 × H 78 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0096", name: "Mooni Chair Astor", productCode: "ID-01-0096", type: "Dining Chair", image: "/images/card/ID-01-0096.png", dimensions: "W 64 × D 56 × H 76 cm", material: "Sungkai Wood", color: "Rustic Astor Wash" },
  { id: "ID-01-0097", name: "Mooni Chair Natural", productCode: "ID-01-0097", type: "Dining Chair", image: "/images/card/ID-01-0097.png", dimensions: "W 64 × D 56 × H 76 cm", material: "Sungkai Wood", color: "Rustic White Wash" },
  { id: "ID-01-0098", name: "Kanaya Chair", productCode: "ID-01-0098", type: "Dining Chair", image: "/images/card/ID-01-0098.png", dimensions: "W 62 × D 58 × H 78.5 cm", material: "Teak Wood", color: "Light Brown" },
  { id: "ID-01-0099", name: "Maluku Chair Grey", productCode: "ID-01-0099", type: "Dining Chair", image: "/images/card/ID-01-0099.png", dimensions: "W 46.5 × D 54 × H 84 cm", material: "Teak Wood", color: "Rustic Grey" },
  { id: "ID-01-0100", name: "Maluku Chair Brown", productCode: "ID-01-0100", type: "Dining Chair", image: "/images/card/ID-01-0100.png", dimensions: "W 46.5 × D 54 × H 84 cm", material: "Teak Wood", color: "Rustic Brown Wash" },
  { id: "ID-01-0101", name: "Sendai Chair Black", productCode: "ID-01-0101", type: "Dining Chair", image: "/images/card/ID-01-0101.png", dimensions: "W 55 × D 56 × H 79 cm", material: "Mahogany Wood", color: "Black" },
  { id: "ID-01-0102", name: "Sendai Chair Natural", productCode: "ID-01-0102", type: "Dining Chair", image: "/images/card/ID-01-0102.png", dimensions: "W 55 × D 56 × H 79 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0103", name: "Emha Chair", productCode: "ID-01-0103", type: "Dining Chair", image: "/images/card/ID-01-0103.png", dimensions: "W 60 × D 54 × H 81.5 cm", material: "Sungkai Wood", color: "Black" },
  { id: "ID-01-0104", name: "Galleon Chair", productCode: "ID-01-0104", type: "Dining Chair", image: "/images/card/ID-01-0104.png", dimensions: "W 51 × D 52 × H 81 cm", material: "Sungkai Wood", color: "Black" },
  { id: "ID-01-0105", name: "Bulogi Chair", productCode: "ID-01-0105", type: "Dining Chair", image: "/images/card/ID-01-0105.png", dimensions: "W 68 × D 66 × H 82 cm", material: "Teak Wood", color: "Natural", additionalSpecs: "Woven seat" },
  
];

export const catalogPages: CatalogPageData[] = [
  {
    id: "dining-chairs-intro",
    kind: "category",
    pageNumber: 1,
    categoryLabel: "Dining Chairs / Seating",
    title: "Dining Chairs",
    subtitle: "Seating",
    description: "A curated selection of furniture designed to bring complete interiors together — combining distinctive design, quality craftsmanship and practical functionality.",
    image: "/images/category/dining_chairs_category.webp",
  },
  { id: "dining-chairs-compact", kind: "products", pageNumber: 2, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0003", "ID-01-0004", "ID-01-0005", "ID-01-0006", "ID-01-0007", "ID-01-0008"] },
  { id: "dining-chairs-details-one", kind: "products", pageNumber: 3, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0029", "ID-01-0035", "ID-01-0036", "ID-01-0037", "ID-01-0079", "ID-01-0080"] },
  { id: "dining-chairs-details-two", kind: "products", pageNumber: 4, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0081", "ID-01-0084", "ID-01-0085", "ID-01-0086", "ID-01-0087", "ID-01-0093"] },
  { id: "dining-chairs-details-three", kind: "products", pageNumber: 5, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0094", "ID-01-0095", "ID-01-0096", "ID-01-0097", "ID-01-0098", "ID-01-0099"] },
  { id: "dining-chairs-details-four", kind: "products", pageNumber: 6, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0100", "ID-01-0101", "ID-01-0102", "ID-01-0103", "ID-01-0104", "ID-01-0105"] },
];

function splitIntoGroups<T>(items: T[], groupSize: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / groupSize) }, (_, index) =>
    items.slice(index * groupSize, (index + 1) * groupSize),
  );
}

/**
 * Portrait pages are derived from the desktop source data. Product records stay
 * in one place; each six-card desktop page becomes two readable mobile pages.
 */
export const mobileCatalogPages: CatalogPageData[] = (() => {
  let pageNumber = 1;
  const pages: CatalogPageData[] = [];

  for (const page of catalogPages) {
    if (page.kind === "category") {
      pages.push({ ...page, id: `${page.id}-mobile`, pageNumber: pageNumber++ });
      continue;
    }

    for (const [index, productIds] of splitIntoGroups(page.productIds, 3).entries()) {
      pages.push({
        ...page,
        id: `${page.id}-mobile-${index + 1}`,
        pageNumber: pageNumber++,
        productIds,
      });
    }
  }

  return pages;
})();
