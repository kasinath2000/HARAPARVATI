import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import categories from "../data/categories";
import CategoryCard from "./ui/CategoryCard";

const Categories = () => {
  return (
    <section
      id="shop"
      className="bg-[#151619] px-[5%] py-20 text-white md:px-[7%] lg:py-24"
    >
      {/* Heading */}
      <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
            WHAT WE OFFER
          </span>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            SHOP BY <span className="text-[#ff6b1a]">CATEGORY</span>
          </h2>

          {/* English Description */}
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Find quality spare parts and accessories for your motorcycle, all in
            one place.
          </p>

          {/* Bengali Tagline */}
          <p className="bengali-text mt-3 max-w-xl text-sm font-medium leading-7 text-[#ff6b1a]">
            আপনার পছন্দের বাইকের জন্য সেরা যন্ত্রাংশ, সবকিছু এক ঠিকানায়।
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b1a] transition hover:text-white"
        >
          Need Help?
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
