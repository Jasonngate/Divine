import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Divine Miracle",
  description: "Appointment booking system",
  icons: {
    icon: '/logo (1).svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body className="bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015]">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
