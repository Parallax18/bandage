import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "../http";

interface IPaginationParams {
  skip?: number;
  limit?: number;
}

export const useGetAllProducts = (params?: IPaginationParams) => {
  return useQuery({
    queryKey: ["all_products", params?.limit, params?.skip],
    queryFn: () =>
      HttpClient.get<Promise<IProductRes>>({
        url: "products",
        params: {
          limit: params?.limit ?? 10,
          skip: params?.skip ?? 0,
        },
      }).then((res) => res),
  });
};

export const useGetSingleProductDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["single_product", id],
    queryFn: () => HttpClient.get<IProduct>({ url: `products/${id}` }),
    enabled: !!id,
  });
};
