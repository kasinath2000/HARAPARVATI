import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

const ContactPage = () => {
  const phoneNumber = "7586012413";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleDirections = () => {
    const address = " Haraparbati garage , Ranibandh, Bankura Road, 722148";

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = () => {
    const message =
      "Hello HARAPARVATI! I want to enquire about your spare parts and garage services.";

    window.open(
      `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="min-h-screen bg-[#101114] px-[5%] py-16 text-white md:px-[7%]">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <span className="text-xs font-bold tracking-[3px] text-[#ff6b1a]">
          GET IN TOUCH
        </span>

        <h1 className="mt-4 text-4xl font-black sm:text-5xl">
          CONTACT <span className="text-[#ff6b1a]">US</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Have a question about spare parts or bike servicing?
          Get in touch with HARAPARVATI.
        </p>

        <p className="bengali-text mt-3 max-w-xl text-sm font-medium leading-7 text-[#ff6b1a]">
          বাইকের যন্ত্রাংশ বা সার্ভিস সম্পর্কে জানতে সরাসরি আমাদের সঙ্গে যোগাযোগ করুন।
        </p>

        {/* Contact Information */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Phone */}
          <div className="rounded-lg border border-white/10 bg-[#151619] p-8 transition hover:border-[#ff6b1a]/50">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#ff6b1a]/10">
              <Phone size={26} className="text-[#ff6b1a]" />
            </div>

            <h2 className="text-xl font-bold">
              Call Our Garage
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Contact us for spare parts availability, pricing,
              and garage service enquiries.
            </p>

            <p className="bengali-text mt-3 text-sm font-medium leading-7 text-[#ff6b1a]">
              যন্ত্রাংশের দাম ও সার্ভিসের তথ্য জানতে আমাদের ফোন করুন।
            </p>

            <button
              type="button"
              onClick={handleCall}
              className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-white transition hover:text-[#ff6b1a]"
            >
              <Phone size={20} className="text-[#ff6b1a]" />
              {phoneNumber}
            </button>

            <p className="mt-2 text-xs text-gray-500">
              Click to call
            </p>
          </div>

          {/* Address */}
          <div className="rounded-lg border border-white/10 bg-[#151619] p-8 transition hover:border-[#ff6b1a]/50">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#ff6b1a]/10">
              <MapPin size={26} className="text-[#ff6b1a]" />
            </div>

            <h2 className="text-xl font-bold">
              Visit Our Garage
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Find us at our garage and spare parts location.
            </p>

            <p className="bengali-text mt-3 text-sm font-medium leading-7 text-[#ff6b1a]">
              আমাদের গ্যারেজে এসে বাইকের যন্ত্রাংশ ও সার্ভিস সম্পর্কে বিস্তারিত জানুন।
            </p>

            <p className="mt-5 text-lg font-bold leading-7 text-white">
              Haraparbati garage , Ranibandh, khatara , Bankura Road
            </p>

            <p className="mt-1 text-sm text-gray-400">
              PIN - 722148
            </p>

            <button
              type="button"
              onClick={handleDirections}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded bg-[#ff6b1a] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              <Navigation size={18} />
              Get Directions
              <ArrowUpRight size={18} />
            </button>

            <p className="mt-2 text-xs text-gray-500">
              Click to open Google Maps
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-lg border border-white/10 bg-[#151619] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-black">
              HAVE A QUESTION?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Chat with us directly on WhatsApp for enquiries
              about spare parts and garage services.
            </p>

            <p className="bengali-text mt-2 text-sm font-medium leading-7 text-[#ff6b1a]">
              যেকোনো প্রশ্ন বা বাইকের প্রয়োজনীয়তার জন্য WhatsApp-এ মেসেজ করুন।
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-[#ff6b1a] px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;