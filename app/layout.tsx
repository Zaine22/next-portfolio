import { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

export const metadata: Metadata = {
  title : " Space Portfolio",

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
