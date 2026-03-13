export default async function About() {
  return (
    <div className="relative">
      <div className="w-full bg-blue-site text-white py-16 sm:py-24 px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-site">About Us</h1>
        <p className="mt-4 text-sm sm:text-base font-helvetica opacity-90">
          Get to know Mr. &amp; Ms. Fix-It Construction Company
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8 sm:px-20 py-12">
        <h2 className="text-center text-3xl sm:text-4xl py-8 font-site">
          About Mr. &amp; Ms. Fix-It
        </h2>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto leading-relaxed">
          Mr. &amp; Ms. Fix-It Construction Company is Davenport&apos;s trusted,
          female-owned construction and remodeling team. We&apos;re proud to
          bring craftsmanship, creativity, and care to every project, big or
          small. From home renovations and repairs to custom builds and
          commercial improvements, our experienced crew delivers reliable work
          with a personal touch.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto leading-relaxed">
          As a local business, we value our community and treat every client
          like a neighbor &mdash; because you are one. Whether you&apos;re
          upgrading your kitchen, refreshing your bathroom, or tackling that
          long-overdue fix, Mr. &amp; Ms. Fix-It is here to make your vision a
          reality.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto leading-relaxed">
          We believe in honest work, fair pricing, and building lasting
          relationships with our clients. Every project we take on is an
          opportunity to demonstrate the values that have made us a trusted name
          in the Davenport community.
        </p>
        <div className="justify-center flex flex-col sm:flex-row gap-6 mt-10 text-center">
          <a href="/contact" className="btn-main text-lg">
            Get a Free Estimate
          </a>
          <a href="/projects" className="btn-main text-lg">
            View Our Projects
          </a>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl my-10 sm:my-20 font-site">
          Our Values
        </h2>
        <div className="flex flex-col sm:flex-row gap-12 justify-between">
          <div className="text-center flex flex-col items-center gap-4 flex-1">
            <div className="text-5xl">&#x1F3D7;</div>
            <span className="font-site">
              Quality craftsmanship
              <br /> on every project
            </span>
          </div>
          <div className="text-center flex flex-col items-center gap-4 flex-1">
            <div className="text-5xl">&#x1F91D;</div>
            <span className="font-site">
              Community first &mdash;
              <br /> we treat you like a neighbor
            </span>
          </div>
          <div className="text-center flex flex-col items-center gap-4 flex-1">
            <div className="text-5xl">&#x2B50;</div>
            <span className="font-site">
              Reliable, honest work
              <br /> with a personal touch
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
