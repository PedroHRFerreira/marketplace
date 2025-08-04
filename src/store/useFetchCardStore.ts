import { useFetch } from "@/hooks/useFetch";
import type { ICard } from "@/types/Card";

export function useFetchCards() {
  const url = "https://fakestoreapi.com/products";
  return useFetch<ICard[]>(url);
}
