import NavBar from "@/components/NavBar";
import Categories from "./Categories";

const WeekPick = () => {
	return (
		<div className="flex-1 flex flex-col justify-between min-h-screen">
			<NavBar />
			<div className="flex items-center justify-center w-full px-2">
				<h1>Weekly Picks</h1>
			</div>
			<Categories />
		</div>
	);
};

export default WeekPick;
