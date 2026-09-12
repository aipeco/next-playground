"use client";

import ProductCard from "./ProductCard";
import { useSearchProduct } from "@/hooks/product";

type ProductListProps = {
  products: { title: string; description: string }[];
  query: string;
};

export default function ProductList(props: ProductListProps) {
  // custom hook
  const { setQuery, query, loading, error, products } = useSearchProduct({
    query: props.query,
    products: props.products,
  });

  function onChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search product title or description"
        value={query}
        onChange={onChangeSearch}
      />
      <p>Menampilkan pencatian untuk "{query}"</p>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Error</p>
      ) : products.length > 0 ? (
        <div className="flex gap-4 justify-center flex-wrap">
          {products.map((product) => {
            return (
              <ProductCard
                title={product.title}
                description={product.description}
              />
            );
          })}
        </div>
      ) : (
        <p>Data untuk pencarian "{query}" tidak ditemukan</p>
      )}
    </div>
  );
}
