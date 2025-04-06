"use client";

import { cn } from "@/lib/utils";
import { Blog } from "@/types/blog";

export function SingleBlog({ blog }: { blog: Blog }) {
  return (
    <div data-aos="fade-up" className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end border border-transparent",
          "bg-[url(/images/services/card-image.jpg)] bg-cover",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500",
        )}
      >
        <div className="text relative backdrop-blur-sm rounded-lg p-4 z-50">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative">{blog.title}</h1>
          <p className="font-normal text-sm text-gray-50 relative my-4">{blog.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
