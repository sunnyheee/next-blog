import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticle = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error("This is Error");
  }

  await new Promise((reslove) => setTimeout(reslove, 1500));

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    // cache: "no-store",
    next: { revalidate: 60 },
  }); //ISR

  if (res.status === 404) {
    notFound();
    throw new Error("게시물을 찾을 수 없습니다");
  }

  if (!res.ok) {
    throw new Error("This is Error");
  }

  await new Promise((reslove) => setTimeout(reslove, 1000));

  const article = await res.json();
  return article;
};
