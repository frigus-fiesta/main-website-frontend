import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Frigus Friesta",
  description: "Empowering students and young professionals with immersive internship programs in Full Stack Development, Data Science, Cyber Security, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <main className="relative z-10 overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}