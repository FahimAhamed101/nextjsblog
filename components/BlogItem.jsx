import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300] bg-white border border-fuchsia-500 hover:shadow-[-5px_5px_15px_magenta]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border border-fuchsia-500"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-fuchsia-500 text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-la font-medium tracking-tight text-fuchsia-900">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-fuchsia-700"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/&{id}`}
          className="inline-flex items-center py-2 font-semibold text-center"
        >
          Read more{" "}
          <Image src={assets.arrow} className="ml-2" alt="" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;