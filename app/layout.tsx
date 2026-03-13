import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mr. &amp; Ms. Fix-It Construction Company | Davenport, IA</title>
        <meta
          name="description"
          content="Mr. &amp; Ms. Fix-It Construction Company — Davenport's trusted, female-owned construction and remodeling team. Home renovations, repairs, custom builds, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.wix.com/favicon.ico" />
      </head>
      <body className="text-blue-site bg-white">
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <>
            <Header />
            <main className="bg-white min-h-[600px]">{children}</main>
            <div className="mt-10 sm:mt-20">
              <Footer />
            </div>
          </>
        ) : (
          <div className="bg-white min-h-[600px] max-w-5xl mx-auto p-5">
            Page not available. Please add an environment variable called
            NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
            deployment provider.
          </div>
        )}
      </body>
    </html>
  );
}
