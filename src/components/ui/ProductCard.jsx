// import { MessageCircle, ArrowUpRight } from "lucide-react";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#151619] transition hover:-translate-y-1 hover:border-[#ff6b1a]/50">
//       <div className="relative h-56 overflow-hidden bg-[#101114]">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
//         />

//         <span className="absolute left-4 top-4 rounded bg-[#ff6b1a] px-3 py-1 text-xs font-bold text-white">
//           {product.brand}
//         </span>
//       </div>

//       <div className="p-5">
//         <h3 className="text-lg font-bold text-white">{product.name}</h3>

//         <p className="mt-2 text-sm text-gray-400">{product.description}</p>

//         <p className="mt-3 text-xs text-gray-500">
//           Fits: {product.compatibleBikes.join(", ")}
//         </p>

//         <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
//           <span className="font-bold text-[#ff6b1a]">
//             {product.price == null ? "Contact for Price" : `₹${product.price}`}
//           </span>

//           <button
//             type="button"
//             onClick={() => {
//               window.location.href = `/contact?product=${encodeURIComponent(product.name)}`;
//             }}
//             className="inline-flex items-center gap-2 rounded bg-[#ff6b1a] px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-600"
//           >
//             Enquire
//             <MessageCircle size={15} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#151619] transition hover:-translate-y-1 hover:border-[#ff6b1a]/50">
      <div className="relative h-56 overflow-hidden bg-[#101114]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded bg-[#ff6b1a] px-3 py-1 text-xs font-bold text-white">
          {product.brand}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {product.description}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          Fits: {product.compatibleBikes.join(", ")}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="font-bold text-[#ff6b1a]">
            {product.price == null
              ? "Contact for Price"
              : `₹${product.price}`}
          </span>

          <button
            type="button"
            onClick={() =>
              navigate(
                `/contact?product=${encodeURIComponent(product.name)}`
              )
            }
            className="inline-flex items-center gap-2 rounded bg-[#ff6b1a] px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-600"
          >
            Enquire
            <MessageCircle size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;