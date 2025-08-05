import { useFetch } from "@/hooks/useFetch";
import type { ICard, ICardDetails } from "@/types/Card";

export function useFetchCards() {
  const url = "https://fakestoreapi.com/products";
  return useFetch<ICard[]>(url);
}

export function useFetchCardDetails(productId: number) {
  const url = `https://fakestoreapi.com/products/${productId}`;
  return useFetch<ICardDetails>(url);
}
