"use client"
import { useProducts } from "@/hooks/useProducts";

interface ProductsListProps {
}

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts()
   
  return (
    <div>A wizard is never late</div>
  );
}
