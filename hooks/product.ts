import { useEffect, useState } from "react";
import { searchProducts } from "@/services/product";

type UseSearchProductProps = {
  query: string;
  products: { title: string; description: string }[];
};

export function useSearchProduct(props: UseSearchProductProps) {
  const [query, setQuery] = useState(props.query); //url atas = table
  const [products, setProducts] = useState(props.products); // [...]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // fetching ulang ketika query berubah
  useEffect(
    function () {
      const timeout = setTimeout(function () {
        (async function () {
          if (props.query !== query || props.products !== products) {
            setLoading(true);
            try {
              const data = await searchProducts(query);
              setProducts(data.products);
              setError(false);
            } catch (error) {
              setError(true);
            } finally {
              setLoading(false);
            }
          }
        })(); // function async langsung dijalankan
      }, 600); //use debounce

      return function () {
        clearTimeout(timeout);
      };
    },
    [query],
  );

  // simpan query saat query berubah
  useEffect(
    function () {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("query", query);

      const newUrl = `${window.location.pathname}?${urlParams.toString()}`; // pathname yang sekarang ditambah ? ditambah paramps query=""
      window.history.pushState(null, "", newUrl);
    },
    [query],
  );

  return {
    query,
    setQuery,
    products,
    loading,
    error,
  };
}
