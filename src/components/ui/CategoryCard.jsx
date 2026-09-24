import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Settings,
  Disc3,
  Zap,
  CircleDot,
  ShieldCheck,
  Cog,
} from "lucide-react";

const iconMap = {
  Settings,
  Disc3,
  Zap,
  CircleDot,
  ShieldCheck,
  Cog,
};

const CategoryCard = ({ category }) => {
  const Icon = iconMap[category.icon];

  return (
    <div className="group relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-[#101114] transition duration-300 hover:-translate-y-2 hover:border-[#ff6b1a]/60">
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-110 group-hover:opacity-60"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/60 to-transparent" />

      {/* Card Content */}
      <div className="relative flex min-h-[320px] flex-col justify-end p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ff6b1a]/40 bg-[#ff6b1a]/10 text-[#ff6b1a]">
          {Icon && <Icon size={23} />}
        </div>

        <span className="mb-2 text-xs font-bold tracking-widest text-[#ff6b1a]">
          CATEGORY {String(category.id).padStart(2, "0")}
        </span>

        <h3 className="text-2xl font-extrabold text-white">{category.name}</h3>

        <p className="mt-2 text-sm text-gray-400">{category.description}</p>

        <Link
          to={`/shop/${category.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-[#ff6b1a]"
        >
          Explore Parts
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
