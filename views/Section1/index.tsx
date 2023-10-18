import { NextPage } from "next";
import SideBar from "@/components/SideBar";
import WeekPick from "./WeekPick";

const HeroSection: NextPage = () => {
	return (
		<section className="flex items-center justify-center min-h-screen w-full bg-black text-white">
			<div className="flex flex-row items-start w-full">
				<SideBar />
				<WeekPick />
			</div>
		</section>
	);
};

export default HeroSection;
