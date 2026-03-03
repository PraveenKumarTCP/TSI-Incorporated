import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import AosProvider from "./_components/AosProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TSI Incorporated | Knowledge Beyond Measure",
  description: "Global leader in precision measurement instrumentation, software services, and workflow management for industrial hygiene, environmental monitoring, health and safety, and HVAC testing.",
  keywords: ["TSI", "industrial sensor", "HVAC testing", "measurement instrumentation", "aerosol science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <AosProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
