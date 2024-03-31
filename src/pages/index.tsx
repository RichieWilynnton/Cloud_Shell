import Image from "next/image";
import { Inter } from "next/font/google";
import TerminalBox from "@/components/cmd/TerminalBox";
import BackgroundImage from "@/components/cmd/BackgroundImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center font-josefin">
				<div className="w-full ">
					<TerminalBox />
				</div>
			</div>
			<BackgroundImage />
    </>
  );
}
