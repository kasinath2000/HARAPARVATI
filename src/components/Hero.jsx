// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const slides = [
// //     {
// //       image:
// //         "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
// //       title: "BUILT FOR THE RIDE",
// //     },
// //     {
// //       image:
// //         "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=85",
// //       title: "POWER YOUR JOURNEY",
// //     },
// //     {
// //       image:
// //         "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=85",
// //       title: "RIDE WITHOUT LIMITS",
// //     },
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, [slides.length]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="grid min-h-[85vh] grid-cols-1 items-center gap-10 overflow-hidden bg-[#101114] px-[5%] py-12 text-white md:px-[7%] lg:grid-cols-2 lg:py-16"
// //     >
// //       {/* Left Content */}
// //       <div className="relative z-10">
// //         <span className="inline-flex items-center gap-2 rounded border border-orange-500/40 bg-orange-500/10 px-4 py-2.5 text-xs font-bold tracking-widest text-[#ff6b1a]">
// //           <Wrench size={16} />
// //           BIKE GARAGE & SPARE PARTS
// //         </span>

// //         <h1 className="my-7 text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl">
// //           RIDE WITH <span className="text-[#ff6b1a]">CONFIDENCE.</span>
// //         </h1>

// //         <p className="mb-8 max-w-lg text-sm leading-8 text-gray-400 sm:text-base">
// //           Premium bike spare parts, expert servicing, and reliable care for
// //           every ride. Your bike deserves the best.
// //         </p>

// //         {/* Buttons */}
// //         <div className="flex flex-wrap gap-4">
// //           <Link
// //             to="/shop"
// //             className="inline-flex items-center gap-3 bg-[#ff6b1a] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
// //           >
// //             Explore Parts
// //             <ArrowRight size={18} />
// //           </Link>

// //           <Link
// //             to="/services"
// //             className="inline-flex items-center justify-center border border-gray-700 px-6 py-4 text-sm font-bold text-white transition hover:border-[#ff6b1a] hover:text-[#ff6b1a]"
// //           >
// //             Our Services
// //           </Link>
// //         </div>

// //         {/* Features */}
// //         <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:mt-14">
// //           <div>
// //             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
// //               QUALITY
// //             </h3>
// //             <span className="text-xs text-gray-400">Genuine Parts</span>
// //           </div>

// //           <div>
// //             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
// //               EXPERT
// //             </h3>
// //             <span className="text-xs text-gray-400">Bike Servicing</span>
// //           </div>

// //           <div>
// //             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
// //               TRUSTED
// //             </h3>
// //             <span className="text-xs text-gray-400">Garage Care</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Automatic Image Slider */}
// //       <div className="relative min-h-[350px] overflow-hidden rounded-lg bg-[#1b1e24] sm:min-h-[450px] lg:min-h-[520px]">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={slide.image}
// //             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
// //               currentSlide === index ? "opacity-100" : "opacity-0"
// //             }`}
// //             style={{
// //               backgroundImage: `linear-gradient(0deg, rgba(16,17,20,0.8), rgba(16,17,20,0.05) 60%), url("${slide.image}")`,
// //             }}
// //           />
// //         ))}

// //         {/* Slide Caption */}
// //         <div className="absolute right-6 bottom-8 left-6 z-10 flex items-center justify-between gap-3">
// //           <span className="text-xs font-extrabold tracking-[3px] text-white sm:text-sm">
// //             {slides[currentSlide].title}
// //           </span>

// //           {/* Slide Indicators */}
// //           <div className="flex items-center gap-2">
// //             {slides.map((slide, index) => (
// //               <button
// //                 key={slide.image}
// //                 type="button"
// //                 onClick={() => setCurrentSlide(index)}
// //                 aria-label={`Go to slide ${index + 1}`}
// //                 className={`h-2 rounded-full transition-all duration-300 ${
// //                   currentSlide === index
// //                     ? "w-8 bg-[#ff6b1a]"
// //                     : "w-2 bg-white/50 hover:bg-white"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Previous Button */}
// //         <button
// //           type="button"
// //           onClick={prevSlide}
// //           aria-label="Previous image"
// //           className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
// //         >
// //           <ChevronLeft size={22} />
// //         </button>

// //         {/* Next Button */}
// //         <button
// //           type="button"
// //           onClick={nextSlide}
// //           aria-label="Next image"
// //           className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
// //         >
// //           <ChevronRight size={22} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import FeatureChip from "./ui/FeatureChip";

// import {
//   ArrowRight,
//   Wrench,
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
//   Settings,
//   BadgeCheck,
// } from "lucide-react";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
//       title: "BUILT FOR THE RIDE",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=85",
//       title: "POWER YOUR JOURNEY",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=85",
//       title: "RIDE WITHOUT LIMITS",
//     },
//   ];

//   // Automatic Image Slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Next Slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   // Previous Slide
//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <section
//       id="home"
//       className="grid min-h-[85vh] grid-cols-1 items-center gap-10 overflow-hidden bg-[#101114] px-[5%] py-12 text-white md:px-[7%] lg:grid-cols-2 lg:py-16"
//     >
//       {/* Left Content */}
//       <div className="relative z-10">
//         {/* Brand Badge */}
//         <span className="inline-flex items-center gap-2 rounded border border-orange-500/40 bg-orange-500/10 px-4 py-2.5 text-xs font-bold tracking-widest text-[#ff6b1a]">
//           <Wrench size={16} />
//           BIKE GARAGE & SPARE PARTS
//         </span>

//         {/* Bengali Tagline */}
//         <p className="mt-4 text-sm font-medium tracking-wide text-gray-300 sm:text-base">
//           আপনার বাইকের যত্নে, আমাদের বিশ্বাস।
//         </p>

//         {/* Main Heading */}
//         <h1 className="my-7 text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl">
//           RIDE WITH{" "}
//           <span className="text-[#ff6b1a]">CONFIDENCE.</span>
//         </h1>

//         {/* Description */}
//         <p className="mb-8 max-w-lg text-sm leading-8 text-gray-400 sm:text-base">
//           Premium bike spare parts, expert servicing, and reliable
//           care for every ride. Your bike deserves the best.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <Link
//             to="/shop"
//             className="inline-flex items-center gap-3 bg-[#ff6b1a] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
//           >
//             Explore Parts
//             <ArrowRight size={18} />
//           </Link>

//           <Link
//             to="/services"
//             className="inline-flex items-center justify-center border border-gray-700 px-6 py-4 text-sm font-bold text-white transition hover:border-[#ff6b1a] hover:text-[#ff6b1a]"
//           >
//             Our Services
//           </Link>
//         </div>

//         {/* Features */}
//         <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:mt-14">
//           <div>
//             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
//               QUALITY
//             </h3>
//             <span className="text-xs text-gray-400">
//               Genuine Parts
//             </span>
//           </div>

//           <div>
//             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
//               EXPERT
//             </h3>
//             <span className="text-xs text-gray-400">
//               Bike Servicing
//             </span>
//           </div>

//           <div>
//             <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
//               TRUSTED
//             </h3>
//             <span className="text-xs text-gray-400">
//               Garage Care
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Right Automatic Image Slider */}
//       <div className="relative min-h-[350px] overflow-hidden rounded-lg bg-[#1b1e24] sm:min-h-[450px] lg:min-h-[520px]">
//         {/* Slider Images */}
//         {slides.map((slide, index) => (
//           <div
//             key={slide.image}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//               currentSlide === index
//                 ? "opacity-100"
//                 : "opacity-0"
//             }`}
//             style={{
//               backgroundImage: `linear-gradient(0deg, rgba(16,17,20,0.8), rgba(16,17,20,0.05) 60%), url("${slide.image}")`,
//             }}
//           />
//         ))}

//         {/* Slide Caption and Indicators */}
//         <div className="absolute right-6 bottom-8 left-6 z-10 flex items-center justify-between gap-3">
//           <span className="text-xs font-extrabold tracking-[3px] text-white sm:text-sm">
//             {slides[currentSlide].title}
//           </span>

//           <div className="flex items-center gap-2">
//             {slides.map((slide, index) => (
//               <button
//                 key={slide.image}
//                 type="button"
//                 onClick={() => setCurrentSlide(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   currentSlide === index
//                     ? "w-8 bg-[#ff6b1a]"
//                     : "w-2 bg-white/50 hover:bg-white"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Previous Button */}
//         <button
//           type="button"
//           onClick={prevSlide}
//           aria-label="Previous image"
//           className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
//         >
//           <ChevronLeft size={22} />
//         </button>

//         {/* Next Button */}
//         <button
//           type="button"
//           onClick={nextSlide}
//           aria-label="Next image"
//           className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
//         >
//           <ChevronRight size={22} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Settings,
  BadgeCheck,
} from "lucide-react";

import FeatureChip from "./ui/FeatureChip";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider Images
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
      title: "BUILT FOR THE RIDE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=85",
      title: "POWER YOUR JOURNEY",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=85",
      title: "RIDE WITHOUT LIMITS",
    },
  ];

  // Automatic Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="grid min-h-[85vh] grid-cols-1 items-center gap-10 overflow-hidden bg-[#101114] px-[5%] py-12 text-white md:px-[7%] lg:grid-cols-2 lg:py-16"
    >
      {/* Left Content */}
      <div className="relative z-10">
        {/* Brand Badge */}
        <span className="inline-flex items-center gap-2 rounded border border-orange-500/40 bg-orange-500/10 px-4 py-2.5 text-xs font-bold tracking-widest text-[#ff6b1a]">
          <Wrench size={16} />
          BIKE GARAGE & SPARE PARTS
        </span>

        {/* Bengali Tagline */}
        <p className="bengali-text mt-4 text-sm font-medium tracking-wide max-w-xl leading-7  sm:text-base text-[#ff6b1a]">
          আপনার বাইকের যত্নে, আমাদের বিশ্বাস।
        </p>

        {/* Main Heading */}
        <h1 className="my-7 text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl">
          RIDE WITH <span className="text-[#ff6b1a]">CONFIDENCE.</span>
        </h1>

        {/* Description */}
        <p className="mb-5 max-w-lg text-sm leading-8 text-gray-400 sm:text-base">
          Premium bike spare parts, expert servicing, and reliable care for
          every ride. Your bike deserves the best.
        </p>

        {/* Reusable Feature Chips */}
        <div className="mb-8 flex flex-wrap gap-3">
          <FeatureChip icon={ShieldCheck}>Genuine Parts</FeatureChip>

          <FeatureChip icon={Settings}>Expert Mechanics</FeatureChip>

          <FeatureChip icon={BadgeCheck}>Trusted Service</FeatureChip>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-[#ff6b1a] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
          >
            Explore Parts
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center border border-gray-700 px-6 py-4 text-sm font-bold text-white transition hover:border-[#ff6b1a] hover:text-[#ff6b1a]"
          >
            Our Services
          </Link>
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:mt-14">
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
              QUALITY
            </h3>
            <span className="text-xs text-gray-400">Genuine Parts</span>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
              EXPERT
            </h3>
            <span className="text-xs text-gray-400">Bike Servicing</span>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff6b1a]">
              TRUSTED
            </h3>
            <span className="text-xs text-gray-400">Garage Care</span>
          </div>
        </div>
      </div>

      {/* Right Automatic Image Slider */}
      <div className="relative min-h-[350px] overflow-hidden rounded-lg bg-[#1b1e24] sm:min-h-[450px] lg:min-h-[520px]">
        {/* Slider Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16,17,20,0.8), rgba(16,17,20,0.05) 60%), url("${slide.image}")`,
            }}
          />
        ))}

        {/* Slide Caption and Indicators */}
        <div className="absolute right-6 bottom-8 left-6 z-10 flex items-center justify-between gap-3">
          <span className="text-xs font-extrabold tracking-[3px] text-white sm:text-sm">
            {slides[currentSlide].title}
          </span>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#ff6b1a]"
                    : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous image"
          className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next image"
          className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
