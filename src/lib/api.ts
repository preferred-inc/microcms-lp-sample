import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_API_URL ?? "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY ?? "",
});

export interface Lps {
  id: string;
  title: string;
  content: string;
}

export async function getLpsList(): Promise<Lps[]> {
  const data = await client.get({ endpoint: "lps" });
  return data.contents;
}

// お知らせ詳細を取得
export async function getLps(id: string): Promise<Lps> {
  const data = await client.get({
    endpoint: "lps",
    contentId: id,
  });
  return data;
}
