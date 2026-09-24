
import { Link } from "react-router-dom";

import {
  Wrench,
  Settings,
  Disc3,
  Zap,
  Gauge,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Bike Servicing",
    description:
      "Routine bike maintenance, oil checks, inspection, and servicing.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Engine Repair",
    description:
      "Engine inspection, troubleshooting, and repair services.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Brake Service",
    description:
      "Brake pad replacement, brake inspection, and maintenance.",
    icon: Disc3,
  },
  {
    id: 4,
    title: "Electrical Repair",
    description:
      "Battery, headlight, wiring, and electrical troubleshooting.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Performance Check",
    description:
      "Bike inspection and performance-related maintenance.",
    icon: Gauge,
  },
  {
    id: 6,
    title: "Safety Inspection",
    description:
      "Basic safety checks for tyres, brakes, lights, and other components.",
    icon: ShieldCheck,
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-[#101114] px-[5%] py-16 text-white md:px-[7%]">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
          HARAPARVATI BIKE GARAGE
        </span>

        <h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
          OUR <span className="text-[#ff6b1a]">SERVICES</span>
        </h1>

        {/* English Description */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          From regular maintenance to essential repairs, explore our
          motorcycle garage services.
        </p>

        {/* Bengali Tagline */}
        <p className="bengali-text mt-3 max-w-2xl  text-sm font-medium leading-7 text-[#ff6b1a] sm:text-base">
          নিয়মিত বাইকের যত্ন থেকে জরুরি মেরামত, আপনার প্রতিটি রাইডে
          থাকুক নির্ভরযোগ্য সার্ভিসের ভরসা।
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group rounded-lg border border-white/10 bg-[#151619] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b1a]/50"
              >
                {/* Service Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 text-[#ff6b1a] transition group-hover:bg-[#ff6b1a] group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Service Title */}
                <h2 className="text-xl font-bold">
                  {service.title}
                </h2>

                {/* Service Description */}
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                {/* Enquiry Link */}
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff6b1a] transition hover:text-white"
                >
                  Enquire Now
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-[#ff6b1a]/30 bg-[#151619] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-black sm:text-3xl">
            NEED YOUR BIKE{" "}
            <span className="text-[#ff6b1a]">SERVICED?</span>
          </h2>

          {/* English CTA Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Contact our garage to ask about service availability,
            pricing, and appointment details.
          </p>

          {/* Bengali CTA Tagline */}
          <p className="bengali-text mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-[#ff6b1a]">
            সার্ভিসের খরচ, সময় ও বুকিং সম্পর্কে জানতে আজই আমাদের
            সঙ্গে যোগাযোগ করুন।
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded bg-[#ff6b1a] px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;