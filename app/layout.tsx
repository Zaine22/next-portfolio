import { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/main/Hero";
import StarsCanvas from "@/components/main/Starbackground";

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
        {children}
      </body>
    </html>
  );
}
