import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Raleway, Poppins, Great_Vibes, Nunito } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add the weights you need
  variable: "--font-nunito",
});

// Define font with desired weights and styles
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights
  variable: "--font-raleway", // Define a custom variable name for the font
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, Semi-Bold, and Bold weights for Poppins
  variable: "--font-poppins",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"], // Great Vibes has only 400 weight
  variable: "--font-greatvibes",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Ketan Sharma",
  description: "Ketan Sharma's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
