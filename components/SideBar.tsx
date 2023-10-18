"use client";

import Image from "next/image";
import { Typography, Collapse } from "@mui/material";
import logo from "@/public/svg/logo.svg";
import discoverIcon from "@/public/svg/discoverIcon.svg";
import starIcon from "@/public/svg/starIcon.svg";
import categoryIcon from "@/public/svg/categoryIcon.svg";
import podcastIcon from "@/public/svg/podcastIcon.svg";
import heartIcon from "@/public/svg/libraryHeartIcon.svg";
import moreIcon from "@/public/svg/libraryMoreIcon.svg";
import plusIcon from "@/public/svg/libraryPlusIcon.svg";
import goldIcon from "@/public/svg/libraryGoldIcon.svg";
import playlistIcon from "@/public/svg/playlistIcon.svg";
import recentPlayedIcon from "@/public/svg/recentPlayedIcon.svg";
import subscriptionIcon from "@/public/svg/subscribtionIcon.svg";
import wakpaPodcastIcon from "@/public/svg/WakpaPodcastIcon.svg";
import wakpaAdvertIcon from "@/public/svg/WakpaAdvertIcon.svg";
import wakpaBlogsIcon from "@/public/svg/WapkaReadBlogIcon.svg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useCollapse from "@/hooks/useCollapse";

export interface ISidebar {
	name?: string;
	icon?: string;
	icons?: string[];
	dropdown?: boolean;
}

export const sidebarLinks: ISidebar[] = [
	{ name: "Discover", icon: `${discoverIcon.src}` },
	{ name: "Top 50 podcasts", icon: `${starIcon.src}` },
	{ name: "Categories", icon: `${categoryIcon.src}` },
	{ name: "Add your podcast", icon: `${podcastIcon.src}` },

	{
		name: "Your Library",
		icons: [
			`${heartIcon.src}`,
			`${moreIcon.src}`,
			`${plusIcon.src}`,
			`${goldIcon.src}`,
		],
		dropdown: true,
	},

	{ name: "Your playlist", icon: `${playlistIcon.src}` },
	{ name: "Recently Played", icon: `${recentPlayedIcon.src}` },
	{ name: "Subscription & Hosts", icon: `${subscriptionIcon.src}` },
	{ name: "Wakpa for podcasters", icon: `${wakpaPodcastIcon.src}` },
	{ name: "Wakpa for advertisers", icon: `${wakpaAdvertIcon.src}` },
	{ name: "Read our blogs", icon: `${wakpaBlogsIcon.src}` },
];

const SideBar = () => {
	const { isCollapse, toggleCollapse } = useCollapse();

	return (
		<div className="w-full max-w-[16rem] hidden md:flex flex-col items-start gap-2 min-h-[60vh] bg-deeperGrey shadow-[0px_0px_0px_0px] shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.10)]">
			<div className="w-full max-w-[6.1875rem] max-h-[2.75rem] p-4">
				<Image src={logo.src} alt="logo" width={99} height={44} />
			</div>

			<div className="flex flex-col w-full">
				<ul className="flex flex-col items-start w-full gap-1 p-4 border-b border-white">
					{sidebarLinks
						.slice(0, 8)
						.map((sidebarLink: ISidebar, index: number) => (
							<li key={index} className="w-full">
								{!sidebarLink.dropdown ? (
									<button
										type="button"
										className="flex flex-row items-center gap-2 p-1 bg-[transparent] hover:hover:bg-gradient-to-r from-lightGrey to-deepGrey w-full"
									>
										<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-black p-[0.125rem]">
											<Image
												src={sidebarLink.icon!}
												alt="logo"
												width={18}
												height={18}
											/>
										</div>
										<Typography className="text-base font-bold">
											{sidebarLink.name}
										</Typography>
									</button>
								) : (
									<div className="flex flex-col gap-2 w-full">
										<button
											type="button"
											onClick={toggleCollapse}
											className="flex flex-row items-center gap-1 w-full max-w-[8rem]"
										>
											<Typography className=" text-lg font-bold">
												{sidebarLink.name}
											</Typography>
											{isCollapse ? <BiChevronDown /> : <BiChevronUp />}
										</button>
										<Collapse in={isCollapse}>
											<div className="flex flex-row items-center justify-between w-full">
												{sidebarLink.icons?.map(
													(item: string, index: number) => (
														<div
															key={index}
															className="flex items-center justify-center w-full max-w-[1.875rem] min-h-[1.875rem] rounded-[0.5rem] bg-black p-[0.125rem]"
														>
															<Image
																src={item}
																alt="logo"
																width={18}
																height={18}
															/>
														</div>
													)
												)}
											</div>
										</Collapse>
									</div>
								)}
							</li>
						))}
				</ul>

				<ul className="flex flex-col items-start w-full gap-1 p-4">
					{sidebarLinks
						.slice(8, sidebarLinks.length)
						.map((sidebarLink: ISidebar, index: number) => (
							<li key={index} className="w-full">
								<button
									type="button"
									className="flex flex-row items-center gap-2 p-1 bg-[transparent] hover:bg-gradient-to-r from-lightGrey to-deepGrey w-full"
								>
									<div className="flex items-center justify-center w-full max-w-[2rem] min-h-[2rem] rounded-[0.5rem] bg-black p-[0.125rem]">
										<Image
											src={sidebarLink.icon!}
											alt="logo"
											width={18}
											height={18}
										/>
									</div>
									<Typography className="text-base font-bold">
										{sidebarLink.name}
									</Typography>
								</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
