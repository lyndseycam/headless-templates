import './footer.css';
import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer
    className="m-h-56 leading-7 sm:p-14 font-site"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="flex flex-col sm:flex-row">
      <div className="basis-2/3 bg-blue-site text-white p-14 sm:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">CONTACT US</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="basis-1/3 border-b border-white pb-4">
            <p className="mt-10">
              Have a project in mind? Reach out to us for a free estimate.
              We&apos;d love to hear from you.
            </p>
            <p className="mt-10">Female-Owned &amp; Locally Operated</p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 border-b border-white pb-4">
            <p className="mt-10">Davenport, IA</p>
            <p className="mt-10">Call us for a free estimate</p>
          </div>
        </div>
        <h3 className="text-4xl mt-10">Mr. &amp; Ms. Fix-It</h3>
      </div>
      <div className="basis-1/3 bg-gray-200 p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">GET IN TOUCH</h2>
        <p className="mt-6">Request a free estimate for your next project</p>
        <input
          type="email"
          className="my-6 w-3/4 block mx-auto bg-transparent border-0 border-b border-blue-site text-blue-site"
          placeholder="Email Address"
        />
        <a href="/contact" className="text-purple-site py-6 font-site">
          Contact Us
        </a>
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <p className="font-site text-lg mb-2">Mr. &amp; Ms. Fix-It</p>
      <p className="font-default mb-10">
        &copy; {new Date().getFullYear()} Mr. &amp; Ms. Fix-It Construction
        Company. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
