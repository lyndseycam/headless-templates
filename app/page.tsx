export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full bg-blue-site text-white py-20 sm:py-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-site mb-4">
            Mr. &amp; Ms. Fix-It
          </h1>
          <p className="text-lg sm:text-2xl font-site tracking-wide">
            Construction Company
          </p>
          <p className="mt-6 text-sm sm:text-base font-helvetica max-w-2xl mx-auto opacity-90">
            Davenport&apos;s trusted, female-owned construction and remodeling
            team
          </p>
          <a
            href="/contact"
            className="btn-main mt-8 inline-block text-lg bg-purple-site hover:bg-purple-800"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-5xl mx-auto px-8 sm:px-20 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl text-center font-site mb-8">
          Welcome to Mr. &amp; Ms. Fix-It
        </h2>
        <p className="text-center text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Welcome to Mr. &amp; Ms. Fix-It Construction Company &mdash;
          Davenport&apos;s trusted, female-owned construction and remodeling
          team. We&apos;re proud to bring craftsmanship, creativity, and care to
          every project, big or small. From home renovations and repairs to
          custom builds and commercial improvements, our experienced crew
          delivers reliable work with a personal touch.
        </p>
        <p className="text-center text-sm sm:text-base max-w-3xl mx-auto mt-6 leading-relaxed">
          As a local business, we value our community and treat every client
          like a neighbor &mdash; because you are one. Whether you&apos;re
          upgrading your kitchen, refreshing your bathroom, or tackling that
          long-overdue fix, Mr. &amp; Ms. Fix-It is here to make your vision a
          reality. Let&apos;s build something great together!
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-16 sm:py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-site mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F3E0;</div>
              <h3 className="text-xl font-site mb-3">Home Renovations</h3>
              <p className="text-sm leading-relaxed">
                Transform your living spaces with full-service home renovations.
                From concept to completion, we bring your dream home to life.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F6C1;</div>
              <h3 className="text-xl font-site mb-3">Kitchen &amp; Bath</h3>
              <p className="text-sm leading-relaxed">
                Upgrade your kitchen or refresh your bathroom with modern
                designs and quality materials that stand the test of time.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F527;</div>
              <h3 className="text-xl font-site mb-3">
                Repairs &amp; Maintenance
              </h3>
              <p className="text-sm leading-relaxed">
                No job is too small. We handle everything from minor repairs to
                major fixes with the same level of care and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F3D7;</div>
              <h3 className="text-xl font-site mb-3">Custom Builds</h3>
              <p className="text-sm leading-relaxed">
                Have something unique in mind? Our team specializes in custom
                builds tailored to your specific needs and style.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F3E2;</div>
              <h3 className="text-xl font-site mb-3">
                Commercial Improvements
              </h3>
              <p className="text-sm leading-relaxed">
                We help businesses improve their spaces with reliable commercial
                construction and remodeling services.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-blue-site">
              <div className="text-4xl mb-4">&#x1F3A8;</div>
              <h3 className="text-xl font-site mb-3">Interior Finishing</h3>
              <p className="text-sm leading-relaxed">
                From painting and trim work to flooring and fixtures, we provide
                the finishing touches that make a house feel like home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto px-8 sm:px-20 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl text-center font-site mb-12">
          Why Choose Mr. &amp; Ms. Fix-It?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex gap-4">
            <div className="text-purple-site text-3xl font-site shrink-0">
              01
            </div>
            <div>
              <h3 className="font-site text-lg mb-2">
                Female-Owned &amp; Local
              </h3>
              <p className="text-sm leading-relaxed">
                Proudly female-owned and rooted in Davenport. We invest in our
                community and take pride in every project.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-purple-site text-3xl font-site shrink-0">
              02
            </div>
            <div>
              <h3 className="font-site text-lg mb-2">Quality Craftsmanship</h3>
              <p className="text-sm leading-relaxed">
                Our experienced crew delivers dependable, high-quality work with
                attention to detail on every project.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-purple-site text-3xl font-site shrink-0">
              03
            </div>
            <div>
              <h3 className="font-site text-lg mb-2">Personal Touch</h3>
              <p className="text-sm leading-relaxed">
                We treat every client like a neighbor. Clear communication and
                genuine care are at the heart of what we do.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-purple-site text-3xl font-site shrink-0">
              04
            </div>
            <div>
              <h3 className="font-site text-lg mb-2">Big or Small</h3>
              <p className="text-sm leading-relaxed">
                From a quick fix to a full renovation, no project is too big or
                too small for our team to handle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-site text-white py-16 sm:py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-site mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-sm sm:text-base font-helvetica mb-8 opacity-90">
            Ready to start your next project? Contact us today for a free
            estimate and let Mr. &amp; Ms. Fix-It bring your vision to life.
          </p>
          <a
            href="/contact"
            className="btn-main text-lg bg-purple-site hover:bg-purple-800 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
