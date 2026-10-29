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
  { id: "ID-01-0003", name: "Clinton Chair", productCode: "ID-01-0003", type: "Dining Chair", image: placeholderImage, material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0004", name: "Ello Chair", productCode: "ID-01-0004", type: "Dining Chair", image: placeholderImage, material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0005", name: "Erva Chair", productCode: "ID-01-0005", type: "Dining Chair", image: placeholderImage, material: "Teak Wood", color: "Light Brown" },
  { id: "ID-01-0006", name: "Helvano Chair", productCode: "ID-01-0006", type: "Dining Chair", image: placeholderImage, material: "Teak and rattan", color: "Black" },
  { id: "ID-01-0007", name: "Montego Chair", productCode: "ID-01-0007", type: "Dining Chair", image: placeholderImage, material: "Powder-coated steel", color: "Ivory" },
  { id: "ID-01-0008", name: "Seico Chair", productCode: "ID-01-0008", type: "Dining Chair", image: placeholderImage, material: "Teak Wood", color: "Sage" },
  { id: "ID-01-0094", name: "Tully Chair Black", productCode: "ID-01-0094", type: "Dining Chair", image: placeholderImage, dimensions: "W 53 × D 49 × H 78 cm", material: "Teak Wood", color: "Black" },
  { id: "ID-01-0095", name: "Tully Chair Natural", productCode: "ID-01-0095", type: "Dining Chair", image: placeholderImage, dimensions: "W 53 × D 49 × H 78 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0096", name: "Mooni Chair Astor", productCode: "ID-01-0096", type: "Dining Chair", image: placeholderImage, dimensions: "W 64 × D 56 × H 76 cm", material: "Sungkai Wood", color: "Rustic Astor Wash" },
  { id: "ID-01-0097", name: "Mooni Chair Natural", productCode: "ID-01-0097", type: "Dining Chair", image: placeholderImage, dimensions: "W 64 × D 56 × H 76 cm", material: "Sungkai Wood", color: "Rustic White Wash" },
  { id: "ID-01-0098", name: "Kanaya Chair", productCode: "ID-01-0098", type: "Dining Chair", image: placeholderImage, dimensions: "W 62 × D 58 × H 78.5 cm", material: "Teak Wood", color: "Light Brown" },
  { id: "ID-01-0099", name: "Maluku Chair Grey", productCode: "ID-01-0099", type: "Dining Chair", image: placeholderImage, dimensions: "W 46.5 × D 54 × H 84 cm", material: "Teak Wood", color: "Rustic Grey" },
  { id: "ID-01-0100", name: "Maluku Chair Brown", productCode: "ID-01-0100", type: "Dining Chair", image: placeholderImage, dimensions: "W 46.5 × D 54 × H 84 cm", material: "Teak Wood", color: "Rustic Brown Wash" },
  { id: "ID-01-0101", name: "Sendai Chair Black", productCode: "ID-01-0101", type: "Dining Chair", image: placeholderImage, dimensions: "W 55 × D 56 × H 79 cm", material: "Mahogany Wood", color: "Black" },
  { id: "ID-01-0102", name: "Sendai Chair Natural", productCode: "ID-01-0102", type: "Dining Chair", image: placeholderImage, dimensions: "W 55 × D 56 × H 79 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0103", name: "Emha Chair", productCode: "ID-01-0103", type: "Dining Chair", image: placeholderImage, dimensions: "W 60 × D 54 × H 81.5 cm", material: "Sungkai Wood", color: "Black" },
  { id: "ID-01-0104", name: "Galleon Chair", productCode: "ID-01-0104", type: "Dining Chair", image: placeholderImage, dimensions: "W 51 × D 52 × H 81 cm", material: "Sungkai Wood", color: "Black" },
  { id: "ID-01-0105", name: "Bulogi Chair", productCode: "ID-01-0105", type: "Dining Chair", image: placeholderImage, dimensions: "W 68 × D 66 × H 82 cm", material: "Teak Wood", color: "Natural", additionalSpecs: "Woven seat" },
  { id: "ID-01-0106", name: "Aster Chair", productCode: "ID-01-0106", type: "Dining Chair", image: placeholderImage, dimensions: "W 54 × D 55 × H 80 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0107", name: "Banyu Chair", productCode: "ID-01-0107", type: "Dining Chair", image: placeholderImage, dimensions: "W 58 × D 57 × H 78 cm", material: "Sungkai Wood", color: "Light Brown" },
  { id: "ID-01-0108", name: "Citra Chair", productCode: "ID-01-0108", type: "Dining Chair", image: placeholderImage, dimensions: "W 50 × D 53 × H 82 cm", material: "Teak Wood", color: "Black" },
  { id: "ID-01-0109", name: "Damar Chair", productCode: "ID-01-0109", type: "Dining Chair", image: placeholderImage, dimensions: "W 57 × D 56 × H 79 cm", material: "Mahogany Wood", color: "Natural" },
  { id: "ID-01-0110", name: "Eka Chair", productCode: "ID-01-0110", type: "Dining Chair", image: placeholderImage, dimensions: "W 52 × D 54 × H 80 cm", material: "Teak Wood", color: "Rustic Brown" },
  { id: "ID-01-0111", name: "Fara Chair", productCode: "ID-01-0111", type: "Dining Chair", image: placeholderImage, dimensions: "W 56 × D 58 × H 81 cm", material: "Sungkai Wood", color: "Ivory" },
  { id: "ID-01-0112", name: "Giri Chair", productCode: "ID-01-0112", type: "Dining Chair", image: placeholderImage, dimensions: "W 55 × D 55 × H 77 cm", material: "Teak Wood", color: "Natural" },
  { id: "ID-01-0113", name: "Hana Chair", productCode: "ID-01-0113", type: "Dining Chair", image: placeholderImage, dimensions: "W 59 × D 57 × H 80 cm", material: "Teak Wood", color: "Black" },
  { id: "ID-01-0114", name: "Ivara Chair", productCode: "ID-01-0114", type: "Dining Chair", image: placeholderImage, dimensions: "W 51 × D 54 × H 79 cm", material: "Mahogany Wood", color: "Natural" },
  { id: "ID-01-0115", name: "Jati Chair", productCode: "ID-01-0115", type: "Dining Chair", image: placeholderImage, dimensions: "W 60 × D 58 × H 82 cm", material: "Teak Wood", color: "Light Brown" },
  { id: "ID-01-0116", name: "Kaya Chair", productCode: "ID-01-0116", type: "Dining Chair", image: placeholderImage, dimensions: "W 53 × D 55 × H 78 cm", material: "Sungkai Wood", color: "Rustic Grey" },
  { id: "ID-01-0117", name: "Luma Chair", productCode: "ID-01-0117", type: "Dining Chair", image: placeholderImage, dimensions: "W 58 × D 56 × H 81 cm", material: "Teak Wood", color: "Natural" },
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
    image: "/images/catalog/category-placeholder.svg",
  },
  { id: "dining-chairs-compact", kind: "products", pageNumber: 2, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0003", "ID-01-0004", "ID-01-0005", "ID-01-0006", "ID-01-0007", "ID-01-0008"] },
  { id: "dining-chairs-details-one", kind: "products", pageNumber: 3, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0094", "ID-01-0095", "ID-01-0096", "ID-01-0097", "ID-01-0098", "ID-01-0099"] },
  { id: "dining-chairs-details-two", kind: "products", pageNumber: 4, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0100", "ID-01-0101", "ID-01-0102", "ID-01-0103", "ID-01-0104", "ID-01-0105"] },
  { id: "dining-chairs-details-three", kind: "products", pageNumber: 5, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0106", "ID-01-0107", "ID-01-0108", "ID-01-0109", "ID-01-0110", "ID-01-0111"] },
  { id: "dining-chairs-details-four", kind: "products", pageNumber: 6, categoryLabel: "Dining Chairs / Seating", productIds: ["ID-01-0112", "ID-01-0113", "ID-01-0114", "ID-01-0115", "ID-01-0116", "ID-01-0117"] },
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

  return catalogPages.flatMap((page) => {
    if (page.kind === "category") {
      return [{ ...page, id: `${page.id}-mobile`, pageNumber: pageNumber++ }];
    }

    return splitIntoGroups(page.productIds, 3).map((productIds, index) => ({
      ...page,
      id: `${page.id}-mobile-${index + 1}`,
      pageNumber: pageNumber++,
      productIds,
    }));
  });
})();
