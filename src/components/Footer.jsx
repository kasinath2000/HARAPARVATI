import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Wrench } from "lucide-react";

import categories from "../data/categories";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0e] px-[5%] pt-14 text-white md:px-[7%]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ff6b1a] text-2xl font-black text-white">
              H
            </div>

            <div>
              <h2 className="text-lg font-black tracking-wide">
                HARAPARVATI
              </h2>

              <p className="text-[10px] font-semibold tracking-wider text-gray-400">
                BIKE GARAGE & SPARE PARTS
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Motorcycle spare parts, accessories, and garage services for your
            riding journey.
          </p>

          <p className="bengali-text mt-4 text-sm font-semibold text-[#ff6b1a]">
            আপনার যাত্রা হোক নিরাপদ ও আত্মবিশ্বাসী।
          </p>

          <p className="mt-2 text-xs font-bold tracking-[2px] text-[#ff6b1a]">
            RIDE WITH CONFIDENCE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Quick Links
          </h3>

          <div className="flex flex-col items-start gap-3 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-[#ff6b1a]">
              Home
            </Link>

            <Link to="/shop" className="transition hover:text-[#ff6b1a]">
              Shop All Parts
            </Link>

            <Link to="/services" className="transition hover:text-[#ff6b1a]">
              Our Services
            </Link>

            <Link to="/about" className="transition hover:text-[#ff6b1a]">
              About Us
            </Link>

            <Link to="/contact" className="transition hover:text-[#ff6b1a]">
              Contact
            </Link>

            <Link
              to="/privacy-policy"
              className="transition hover:text-[#ff6b1a]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Categories
          </h3>

          <div className="flex flex-col items-start gap-3 text-sm text-gray-400">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop/${category.slug}`}
                className="transition hover:text-[#ff6b1a]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Get In Touch
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-start gap-3 transition hover:text-[#ff6b1a]"
            >
              <Phone
                size={18}
                className="mt-1 shrink-0 text-[#ff6b1a]"
              />
              <span>+91 98765 43210</span>
            </a>

            {/* Address - no br tag */}
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-[#ff6b1a]"
              />

              <p className="leading-6">
                Haraparvati Bike Garage, Ranibandh, Khatra,
                Bankura Road, 722148, West Bengal, India
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded bg-[#ff6b1a] px-4 py-3 text-xs font-bold text-white transition hover:bg-orange-600"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

     {/* Bottom Bar */}
<div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 items-center gap-3 border-t border-white/10 py-6 text-xs text-gray-500 sm:grid-cols-3">

  {/* Left */}
  <div className="text-center sm:text-left">
    <p>
      © {new Date().getFullYear()} HARAPARVATI. All rights reserved.
    </p>
  </div>

  {/* Center */}
  {/* Center */}
<div className="text-center">
  <p>
    Developed by{" "}
    <Link
      to="/developer"
      className="font-semibold text-gray-300 transition hover:text-[#ff6b1a]"
    >
      Kasinath M.
    </Link>
  </p>
</div>

  {/* Right */}
  <div className="flex items-center justify-center gap-2 sm:justify-end">
    <Wrench size={14} className="text-[#ff6b1a]" />
    <span>Bike Garage & Spare Parts</span>
  </div>

</div>
    </footer>
  );
};

export default Footer;