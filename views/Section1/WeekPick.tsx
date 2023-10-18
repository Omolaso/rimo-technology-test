import Image from "next/image";
import Link from "next/link";
import { CardMedia, Typography } from "@mui/material";
import NavBar from "@/components/NavBar";
import Categories from "./Categories";
import weekPick from "@/public/svg/Pick of the week.svg";
import FranklySpeaking from "@/public/png/franklySpeaking.png";
import WTF from "@/public/png/WTF_Image.png";
import Joe from "@/public/png/joe.png";
import getMade from "@/public/png/getMade.png";
import pickWeekEntertainment from "@/public/svg/pickWeekEntertainment.svg";
import gift from "@/public/svg/gift.svg";
import playCircle from "@/public/svg/play-circle.svg";

interface ITopPodcast {
	name: string;
	author: string;
	category: string;
	imgURL: string;
}

const topPodCasts: ITopPodcast[] = [
	{
		name: "WTF",
		author: "Marc Maron",
		imgURL: `${WTF.src}`,
		category: "Entertainment",
	},
	{
		name: "The Joe Rogan Experience",
		author: "Joe Rogan",
		imgURL: `${Joe.src}`,
		category: "Entertainment",
	},
	{
		name: "How did things get this way",
		author: "Mike & May",
		imgURL: `${getMade.src}`,
		category: "Entertainment",
	},
];

const WeekPick = () => {
	return (
		<section className="flex-1 flex flex-col justify-between min-h-screen w-full">
			<NavBar />
			<div className="flex flex-col gap-1 md:gap-3 items-center justify-center w-full px-2 py-4">
				<div className="flex flex-row items-center gap-1 w-full">
					<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-black p-[0.125rem]">
						<Image src={weekPick.src} alt="week pick" width={18} height={18} />
					</div>
					<Typography className="text-[1.75rem] font-bold">
						Pick of the week
					</Typography>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
					<div
						className="flex items-end justify-end p-4 max-w-[31.75rem] min-h-[23rem] w-full"
						style={{
							backgroundImage: `url(${FranklySpeaking.src})`,
							backgroundOrigin: "border-box",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<button
							type="button"
							className="flex flex-row items-center justify-center hover:scale-95 duration-500 ease-in-out p-1 gap-1 w-full bg-purple max-w-[10.25rem] min-h-[3rem] rounded-[0.75rem]"
						>
							<Typography className="text-base font-semibold">
								Listen Now
							</Typography>
							<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-[transparent] p-[0.125rem]">
								<Image src={playCircle.src} alt="logo" width={18} height={18} />
							</div>
						</button>
					</div>
					<div className="flex flex-col gap-3 w-full">
						<div className="flex flex-row items-center justify-between w-full">
							<div className="flex flex-col gap-3">
								<Typography className="text-[1.5rem] font-bold">
									Top Podcasts
								</Typography>
							</div>
							<Link
								href="/"
								className="flex flex-row items-center gap-1 text-[0.9375rem] text-buttonColor hover:underline"
							>
								See all
							</Link>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-stretch gap-3 w-full">
							{topPodCasts.map((podcast: ITopPodcast, index: number) => (
								<div
									key={index}
									className="flex flex-col justify-between min-h-[18.4375rem] rounded-[0.1875rem] p-1 w-full bg-deeperGrey"
								>
									<div className="flex flex-col items-start gap-[0.5]">
										<CardMedia
											sx={{
												minHeight: "11.625rem",
												width: "100%",
											}}
											image={podcast.imgURL}
										/>
										<Typography
											
											className="text-[1.125rem] font-semibold w-full max-w-[12.0625rem] truncate"
										>
											{podcast.name}
										</Typography>
										<Typography className="text-[0.9375rem] font-normal">
											By - {podcast.author}
										</Typography>
									</div>
									<div className="flex flex-row flex-wrap items-center justify-between">
										<div className="flex flex-row gap-1">
											<Image
												src={pickWeekEntertainment.src}
												alt="gift"
												width={18}
												height={18}
											/>
											<Typography className="font-normal text-sm">{podcast.category}</Typography>
										</div>
										<Image src={gift.src} alt="gift" width={18} height={18} />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Categories />
		</section>
	);
};

export default WeekPick;
