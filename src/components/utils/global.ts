import { IFilterSortParams, IProduct } from "../interface";

export const filterAndSortProducts = (
  products: IProduct[],
  { searchTerm, minPrice, maxPrice, sortBy, order }: IFilterSortParams
): IProduct[] => {
  return products
    .filter((product: IProduct) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const withinPriceRange =
        (minPrice === "" || product.price >= minPrice) &&
        (maxPrice === "" || product.price <= maxPrice);

      return matchesSearch && withinPriceRange;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "price") {
        comparison = a.price - b.price;
      } else if (sortBy === "stock") {
        comparison = a.stock - b.stock;
      } else if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      }
      return order === "ascending" ? comparison : -comparison; 
    });
};
