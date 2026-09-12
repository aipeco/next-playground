import ProductAmount from "@/components/products/ProductAmount";
import ProductCard from "@/components/products/ProductCard";
import ProductList from "@/components/products/ProductList";
import { searchProducts } from "@/services/product";

export type ProductsPageProps = {
  searchParams: Promise<{ query: string }>;
};

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams; //ngambil query
  const data = await searchProducts(searchParams.query ?? ""); //fetching pakai query
  return (
    <div>
      <h1>Products Page</h1>
      <p>Show all my products here</p>
      <ProductList query={searchParams.query ?? ""} products={data.products}/>

      {/* <ProductAmount/> */}

      {/* <ProductCard // reusable components
            title="product"
            description="description"/>

            <ProductCard
            title="product"
            description="description"/>

            <ProductCard
            title="product"
            description="description"/> */}

      {/* <div className="flex-1 border border-gray-300 p-4 m-2 rounded-md">
                <h1>Kopi Susu</h1>
                <p>Kopi susu enak creamy dan manis</p>
                <img src="https://placehold.co/120x50" alt="Es Kopi Susu"></img>
            </div>

            <div className="flex-1 border border-gray-300 p-4 m-2 rounded-md">
                <h1>Pancong Coklat Keju</h1>
                <p>Roti mirip pukis namun lebih besar</p>
                <img src="https://placehold.co/120x50" alt="Es Kopi Susu"></img>
            </div>

            <div className="flex-1 border border-gray-300 p-4 m-2 rounded-md">
                <h1>Matcha Latte</h1>
                <p>Minuman rasa matcha yang menyegarkan bukan rasa rumput</p>
                <img src="https://placehold.co/120x50" alt="Es Kopi Susu"></img>
            </div> */}
    </div>
  );
}
