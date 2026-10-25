import SoldOut, { soldOutSuggestions } from "./SoldOut";

// Any /products/<link> that doesn't match a product shows the sold-out page.
export default async function ProductNotFound() {
  return <SoldOut suggestions={await soldOutSuggestions()} />;
}
