import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tyrebankhyd.com"),
  title: "Tyre Bank Hyderabad | MRF Tyres & Tyre Care Since 1995",
  description: "Tyre Bank in Amberpet, Hyderabad. MRF tyres, tyre changing, wheel alignment, balancing and nitrogen filling. Serving customers since 1995.",
  openGraph: {
    title: "Tyre Bank Hyderabad",
    description: "MRF tyres and professional tyre care in Amberpet since 1995.",
    images: ["/images/legacy/banner_1.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
