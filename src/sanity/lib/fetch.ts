import { QueryParams } from "next-sanity";
import { client } from "./client";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60, // default 1 minute
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: revalidate,
      tags: tags,
    },
  });
}
