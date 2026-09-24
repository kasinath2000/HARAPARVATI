const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-[5%] py-20 text-white md:px-[7%]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff6b1a]">
          Privacy
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-6 leading-8 text-gray-400">
          At HARAPARVATI Bike Garage & Spare Parts, we respect your privacy.
          This Privacy Policy explains how we collect, use, and protect
          information provided through our website.
        </p>

        <section className="mt-10 space-y-8 text-gray-400">
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Information We Collect
            </h2>
            <p className="leading-7">
              We may collect information such as your name, phone number,
              address, and other details when you contact us or request our
              services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              How We Use Your Information
            </h2>
            <p className="leading-7">
              Information may be used to respond to enquiries, provide garage
              services, process requests, and communicate with customers.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Data Protection
            </h2>
            <p className="leading-7">
              We take reasonable measures to protect customer information from
              unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Contact Us
            </h2>
            <p className="leading-7">
              If you have questions about this Privacy Policy, please contact
              HARAPARVATI Bike Garage & Spare Parts.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;