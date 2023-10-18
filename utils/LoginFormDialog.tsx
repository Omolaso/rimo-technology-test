import Image from "next/image";
import {
	CardMedia,
	Dialog,
	DialogContent,
	DialogActions,
	Button,
	DialogContentText,
	Typography,
} from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import registerUser from "@/public/png/registerUser.png";
import closeIcon from "@/public/svg/closeIcon.svg";
import useSubmmiting from "@/hooks/useSubmitting";
import { axiosFetcher } from "./axiosFetcher";
import Progress from "./Progress";

export interface IFormDialog {
	open: boolean;
	setOpen: Function;
}

const LoginFormDialog = ({ open, setOpen }: IFormDialog) => {
	const { submitting, setSubmitting } = useSubmmiting();

	const handleClose = () => {
		setOpen(false);
	};

	const userLogin = (email: string, password: string) => {
		setSubmitting(true);
		const userInfo = {
			email: email,
			password: password,
		};

		try {
			axiosFetcher.post("/post_api_listeners_login", userInfo).then((res) => {
				console.log(res);
				setSubmitting(false);
				// handleClick();
			});
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth={"md"}>
			<DialogActions className="bg-normalBlack">
				<Button onClick={handleClose}>
					<Image src={closeIcon.src} alt="search" width={15} height={15} />
				</Button>
			</DialogActions>
			<DialogContent
				sx={{ width: "100%", maxWidth: "60rem" }}
				className="flex flex-row items-center justify-between bg-normalBlack text-white min-h-[30rem] w-full"
			>
				<div className="flex-1 flex flex-col items-center gap-2 w-full max-w-[22rem]">
					<Typography className="font-medium text-base">
						Log in with email
					</Typography>
					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={Yup.object({
							email: Yup.string()
								.email("Invalid email address")
								.required("Required"),
							password: Yup.string().required("Required"),
						})}
						onSubmit={(values, { resetForm }) => {
							userLogin(values.email, values.password);
							resetForm();
						}}
					>
						<Form className="flex flex-col w-full gap-4">
							<div className="flex flex-col">
								<Field
									name="email"
									type="email"
									placeholder="Enter your email"
									className="py-2 px-4 min-h-[3.7rem] bg-[transparent] rounded-[2rem] text-white border hover:outline-0 focus:outline-0"
								/>

								<div className="text-red-600">
									<ErrorMessage name="email" />
								</div>
							</div>

							<div className="flex flex-col">
								<Field
									name="password"
									type="password"
									placeholder="Enter your password"
									className="py-2 px-4 min-h-[3.7rem] bg-[transparent] rounded-[2rem] text-white border hover:outline-0 focus:outline-0"
								/>

								<div className="text-red-600">
									<ErrorMessage name="password" />
								</div>
							</div>

							<button
								type="submit"
								className="self-start flex items-center justify-center w-full max-w-[6.4375rem] py-2 px-4 min-h-[3.7rem] bg-signUpFormtext hover:opacity-95 duration-500 ease-in-out rounded-[2rem] text-normalBlack"
							>
								{submitting ? <Progress /> : "Log in"}
							</button>
						</Form>
					</Formik>
				</div>

				<div className="flex-1 flex flex-col items-center gap-4 w-full max-w-[25.25rem]">
					<CardMedia
						sx={{
							minHeight: "18.25rem",
							width: "100%",
						}}
						image={registerUser.src}
					/>
					<DialogContentText className="text-[1.625rem] text-signUpFormtext font-bold">
						Join a community of podcast lovers and creators.
					</DialogContentText>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LoginFormDialog;
