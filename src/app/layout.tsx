import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./app.css";
import "@/admin/styles/admin.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "U Mind — Anonymous mental-wellness app in Hindi & English",
  description:
    "Talk to Saathi, our AI companion, listen to calming sessions, or book an RCI-verified psychologist — without telling anyone who you are. 7 days free.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="lavender" className={`${lora.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
