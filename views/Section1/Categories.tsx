import Image from "next/image";
import topCategories from "@/public/svg/topCategories.svg";
import { Typography } from "@mui/material";
import { ISidebar } from "@/components/SideBar";
import comedy from "@/public/svg/comedy.svg";
import health from "@/public/svg/health.svg";
import love from "@/public/svg/loveRomance.svg";
import education from "@/public/svg/education.svg";
import religion from "@/public/svg/religion.svg";
import music from "@/public/svg/music.svg";
import tech from "@/public/svg/tech.svg";
import government from "@/public/svg/government.svg";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const categories: ISidebar[] = [
	{ name: "Comedy", icon: `${comedy.src}` },
	{ name: "Heart & Fitness", icon: `${health.src}` },
	{ name: "Love & Romance", icon: `${love.src}` },
	{ name: "Education", icon: `${education.src}` },
	{ name: "Religion", icon: `${religion.src}` },
	{ name: "Music", icon: `${music.src}` },
	{ name: "Technology", icon: `${tech.src}` },
	{ name: "Government & Politics", icon: `${government.src}` },
];

const Categories = () => {
	return (
		<section className="flex items-center justify-center px-2 min-h-[15.1875rem] w-full">
			<div className="flex flex-col gap-4 p-4 w-full bg-deeperGrey">
				<div className="flex flex-row items-center gap-2 w-full">
					<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-black p-[0.125rem]">
						<Image
							src={topCategories.src}
							alt="top category"
							width={18}
							height={18}
						/>
					</div>
					<Typography className="font-blod text-[1.5rem]">
						Top Categories
					</Typography>
				</div>
				<div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
					<ul className="flex-1 flex flex-row items-center flex-wrap gap-2 w-full">
						{categories.map((category: ISidebar, index: number) => (
							<li
								key={index}
								className="flex items-center justify-center min-h-[3.4375rem] bg-lightGrey rounded-[0.75rem] hover:scale-95 duration-500 ease-in-out w-full max-w-full md:max-w-[14rem]"
							>
								<button
									type="button"
									className="flex flex-row items-center p-1 gap-1 w-full "
								>
									<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-black p-[0.125rem]">
										<Image
											src={category.icon!}
											alt="logo"
											width={18}
											height={18}
										/>
									</div>
									<Typography className="text-base font-semibold">
										{category.name}
									</Typography>
								</button>
							</li>
						))}
					</ul>

					<Link
						href="/"
						className="flex flex-row items-center gap-1 w-full max-w-[10rem] text-buttonColor hover:underline"
					>
						<Typography className=" text-[0.9375rem]">
							See all categories
						</Typography>
						<BiChevronRight className="text-lg" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Categories;
