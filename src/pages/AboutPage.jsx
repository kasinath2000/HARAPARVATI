import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Settings, ArrowUpRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Bike Spare Parts",
    description:
      "Explore motorcycle spare parts and accessories across different categories.",
    icon: Settings,
  },
  {
    id: 2,
    title: "Garage Services",
    description:
      "Find information about routine servicing and motorcycle repair services.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Rider Safety",
    description:
      "Browse riding gear and safety-related motorcycle accessories.",
    icon: ShieldCheck,
  },
];

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-[#101114] px-[5%] py-16 text-white md:px-[7%]">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
          ABOUT HARAPARVATI
        </span>

        <h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
          RIDE WITH <span className="text-[#ff6b1a]">CONFIDENCE.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-sm leading-8 text-gray-400 sm:text-base">
          HARAPARVATI is a motorcycle garage and spare parts business focused on
          helping riders explore bike parts, accessories, and garage services in
          one place.
        </p>
        <p className="bengali-text mt-3 max-w-3xl text-sm font-medium leading-7 text-[#ff6b1a]">
          বাইকের যন্ত্রাংশ, নির্ভরযোগ্য সার্ভিস আর রাইডিংয়ের প্রয়োজনীয়
          সবকিছু—আপনার পাশে হারাপার্বতী।
        </p>

        {/* About Banner */}
        <div className="relative mt-12 overflow-hidden rounded-lg border border-white/10 bg-[#151619]">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85"
            alt="Motorcycle"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />

          <div className="relative px-6 py-12 sm:px-12 sm:py-16">
            <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
              OUR PURPOSE
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
              YOUR BIKE. YOUR JOURNEY. OUR SUPPORT.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300">
              Our goal is to make it easier for riders to find relevant spare
              parts, learn about available garage services, and contact us for
              product and service enquiries.
            </p>
            <p className="bengali-text mt-3 max-w-2xl text-sm font-medium leading-7 text-[#ff6b1a]">
              আপনার বাইকের প্রতিটি যাত্রায়, সঠিক যন্ত্রাংশ ও যত্নের নির্ভরযোগ্য
              সঙ্গী আমরা।
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
            WHAT WE OFFER
          </span>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            PARTS. SERVICE. <span className="text-[#ff6b1a]">SUPPORT.</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="rounded-lg border border-white/10 bg-[#151619] p-7 transition hover:border-[#ff6b1a]/50"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6b1a]/10 text-[#ff6b1a]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col justify-between gap-6 rounded-lg border border-white/10 bg-[#151619] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-black">HAVE A QUESTION?</h2>

            <p className="mt-3 text-sm text-gray-400">
              Contact us about spare parts or garage services.
            </p>
            <p className="bengali-text mt-3 text-sm font-medium leading-7 text-[#ff6b1a]">
              যন্ত্রাংশ বা গ্যারেজ সার্ভিস সম্পর্কে যেকোনো প্রশ্নে আমাদের সঙ্গে
              যোগাযোগ করুন।
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-[#ff6b1a] px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
