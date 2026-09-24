import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "../components/ui/ProductCard";

const ProductsPage = () => {
  const { category } = useParams();

  const currentCategory = categories.find(
    (item) => item.slug === category
  );

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const pageTitle = currentCategory
    ? currentCategory.name
    : "All Spare Parts";

  return (
    <section className="min-h-screen bg-[#101114] px-[5%] py-16 text-white md:px-[7%]">
      {/* Page Header */}
      <div className="mb-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#ff6b1a]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-6">
          <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
            HARAPARVATI SPARE PARTS
          </span>

          <h1 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            {pageTitle}
          </h1>

          {/* English Description */}
<p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
  Browse our motorcycle spare parts and accessories.
  Contact us for availability, compatibility, and pricing.
</p>

{/* Bengali Tagline */}
<p className="bengali-text mt-3 max-w-xl text-sm font-medium leading-7 text-[#ff6b1a]">
  আপনার বাইকের উপযুক্ত যন্ত্রাংশ খুঁজুন, পণ্যের দাম ও উপলব্ধতা জানতে যোগাযোগ করুন।
</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="mb-10 flex flex-wrap gap-3">
        <Link
          to="/shop"
          className={`rounded border px-4 py-2 text-sm font-semibold transition ${
            !category
              ? "border-[#ff6b1a] bg-[#ff6b1a] text-white"
              : "border-white/10 bg-[#151619] text-gray-300 hover:border-[#ff6b1a]"
          }`}
        >
          All Parts
        </Link>

        {categories.map((item) => (
          <Link
            key={item.id}
            to={`/shop/${item.slug}`}
            className={`rounded border px-4 py-2 text-sm font-semibold transition ${
              category === item.slug
                ? "border-[#ff6b1a] bg-[#ff6b1a] text-white"
                : "border-white/10 bg-[#151619] text-gray-300 hover:border-[#ff6b1a]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Product Count */}
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-sm text-gray-400">
          Showing{" "}
          <span className="font-bold text-white">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-white/10 bg-[#151619] px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">
            {currentCategory
              ? "No products in this category yet"
              : "Category not found"}
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
            Please explore other categories or contact our garage
            for assistance.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded bg-[#ff6b1a] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Browse All Parts
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;