import Link from "next/link";
import Image from "next/image";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            width={1280}
            height={300}
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className=" text-slate-900 text-3xl font-bold hover:text-gray-700"
          >
            Study Next.js
          </Link>
          <p className=" text-am pb-3 text-slate-900">
            By sunny puliced on 2013/10/10
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam
            ipsum dolores voluptatibus laudantium! Nisi accusantium maiores
            voluptatem accusamus earum blanditiis ratione deserunt deleniti,
            incidunt illo eveniet mollitia nihil? Iste.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
