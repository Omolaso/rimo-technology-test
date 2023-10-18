"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import searchIcon from "@/public/svg/searchIcon.svg";
import downloadIcon from "@/public/svg/downloadIcon.svg";
import loginIcon from "@/public/svg/loginIcon.svg";
import signupIcon from "@/public/svg/signupIcon.svg";
import MobileViewNavs from "./MobileViewNavs";
import useLoginDialog from "@/hooks/useLoginDialog";
import LoginFormDialog from "@/utils/LoginFormDialog";

const NavBar = () => {
	const router = useRouter();
	const { loginDialog, setLoginDialog, handleLoginDialogOpen } =
		useLoginDialog();

	return (
		<>
			<nav className="flex items-center justify-center w-full bg-deepGrey shadow-sm px-2">
				<div className="hidden lg:flex items-center justify-center w-full min-h-[4.8125rem] p-2">
					<div className="flex flex-row items-center justify-between w-full gap-3">
						<div className="flex items-center justify-between w-full max-w-[30.125rem] bg-white min-h-[2.875rem] rounded-[0.75rem] gap-1 px-3">
							<input
								type="search"
								placeholder="Search by Podcast Name, Host name, Categories, Tags..."
								className="flex-1 bg-[transparent] hover:outline-0 focus:outline-0 text-black text-[0.8125rem]"
							/>
							<Image src={searchIcon.src} alt="search" width={15} height={15} />
						</div>
						<div className="flex flex-row items-center justify-between w-full max-w-[30.125rem] gap-2">
							<button
								type="button"
								className="flex flex-row items-center justify-center p-1 gap-2  w-full max-w-[12.3125rem] bg-black min-h-[2.625rem] shadow-[0px_0px_2px_1px] shadow-buttonColor rounded-[1.125rem] hover:scale-95 duration-500 ease-in-out"
							>
								<Image
									src={downloadIcon.src}
									alt="search"
									width={15}
									height={15}
								/>
								<Typography className="text-buttonColor">
									Download the App
								</Typography>
							</button>
                            
							<button
								type="button"
                                onClick={() => router.push("/signup")}
								className="flex flex-row items-center justify-center p-1 gap-2 w-full max-w-[7.5rem] min-h-[2.625rem] bg-buttonColor rounded-[1.125rem] hover:scale-95 duration-500 ease-in-out"
							>
								<Image
									src={signupIcon.src}
									alt="search"
									width={15}
									height={15}
								/>
								<Typography
									variant="overline"
									className="text-base font-medium"
								>
									Sign Up
								</Typography>
							</button>

							<button
								type="button"
								onClick={handleLoginDialogOpen}
								className="flex flex-row items-center justify-center p-1 gap-2 w-full max-w-[7.5rem] min-h-[2.625rem] bg-[transparent] border border-white rounded-[1.125rem] hover:scale-95 duration-500 ease-in-out"
							>
								<Image
									src={loginIcon.src}
									alt="search"
									width={15}
									height={15}
								/>
								<Typography
									variant="overline"
									className="text-base font-medium"
								>
									Log In
								</Typography>
							</button>
						</div>
					</div>
				</div>
				<MobileViewNavs />
			</nav>
			<LoginFormDialog open={loginDialog} setOpen={setLoginDialog} />
		</>
	);
};

export default NavBar;
