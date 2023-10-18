import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Typography, Collapse } from "@mui/material";
import useModal from "@/hooks/useModal";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useCollapse from "@/hooks/useCollapse";
import { ISidebar, sidebarLinks } from "./SideBar";

const MobileViewNavs = () => {
	const { modal, setModal } = useModal();
	const { isCollapse, toggleCollapse } = useCollapse();
	return (
		<div className="flex md:hidden items-center justify-center w-full min-h-[4.8125rem] p-2">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="w-full max-w-[6.1875rem] max-h-[2.75rem] p-4">
					<Image src={logo.src} alt="logo" width={99} height={44} />
				</div>
				<button type="button" onClick={() => setModal(true)}>
					<RiMenu4Fill className="text-white font-bold w-10 h-10" />
				</button>
			</div>

			<div
				className={
					modal
						? "fixed z-50 right-0 top-0 h-full bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
						: "fixed z-50 right-[-100%] h-full top-0 bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
				}
			>
				<div className="flex flex-col gap-8">
					<button
						type="button"
						onClick={() => setModal(false)}
						className="self-end"
					>
						<AiOutlineClose className="text-white font-bold w-8 h-8" />
					</button>

					<div className="flex flex-col w-full">
						<ul className="flex flex-col items-start w-full gap-1 border-b border-white">
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

						<ul className="flex flex-col items-start w-full gap-1">
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
			</div>
		</div>
	);
};

export default MobileViewNavs;
