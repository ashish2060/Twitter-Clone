import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-4"></div>
      <div className="col-span-6"></div>
      <div className="col-span-2"></div>
    </div>
  );
}
