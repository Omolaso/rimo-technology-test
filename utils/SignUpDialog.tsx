// import Image from "next/image";
// import {
// 	CardMedia,
// 	Dialog,
// 	DialogContent,
// 	DialogActions,
// 	Button,
// 	DialogContentText,
// 	DialogTitle,
// } from "@mui/material";

// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import registerUser from "@/public/png/registerUser.png";
// import { AiOutlineMail } from "react-icons/ai";
// import { BiChevronRight } from "react-icons/bi";
// import closeIcon from "@/public/svg/closeIcon.svg";
// import useSubmmiting from "@/hooks/useSubmitting";
// import { axiosFetcher } from "./axiosFetcher";
// import Progress from "./Progress";

// export interface IFormDialog {
// 	open: boolean;
// 	setOpen: Function;
// }

// const SignUpFormDialog = ({ open, setOpen }: IFormDialog) => {
// 	const { submitting, setSubmitting } = useSubmmiting();

// 	const handleClose = () => {
// 		setOpen(false);
// 	};

// 	const contactUs = (email: string, password: string) => {
// 		setSubmitting(true);
// 		const contactInfo = {
// 			email: email,
// 			password: password,
// 		};

// 		try {
// 			axiosFetcher
// 				.post("/post_api_listeners_register", contactInfo)
// 				.then((res) => {
// 					console.log(res);
// 					setSubmitting(false);
// 					// handleClick();
// 				});
// 		} catch (error) {
// 			console.log(error);
// 			setSubmitting(false);
// 		}
// 	};

// 	return (
// 		<Dialog open={open} onClose={handleClose} fullWidth maxWidth={"md"}>
// 			<DialogActions className="bg-normalBlack">
// 				<Button onClick={handleClose}>
// 					<Image src={closeIcon.src} alt="search" width={15} height={15} />
// 				</Button>
// 			</DialogActions>
// 			<DialogContent
// 				sx={{ width: "100%", maxWidth: "60rem" }}
// 				className="flex flex-row items-center justify-between bg-normalBlack text-white min-h-[30rem] w-full"
// 			>
// 				<div className="flex-1 w-full max-w-[22rem]">
// 					<Formik
// 						initialValues={{ email: "", password: "" }}
// 						validationSchema={Yup.object({
// 							email: Yup.string()
// 								.email("Invalid email address")
// 								.required("Required"),
// 							password: Yup.string().required("Required"),
// 						})}
// 						onSubmit={(values, { setSubmitting, resetForm }) => {
// 							console.log(values);
// 							resetForm();
// 						}}
// 					>
// 						<Form className="flex flex-col gap-4">
// 							<div className=" flex flex-col">
// 								<div className="flex flex-row items-center justify-center py-2 px-4 min-h-[3.7rem] bg-white rounded-[2rem] text-normalBlack gap-4">
// 									<AiOutlineMail className="text-lg" />
// 									<Field
// 										name="email"
// 										type="email"
// 										placeholder="Create with your email"
// 										className="border-none outline-0 hover:outline-0 focus:outline-0"
// 									/>
// 									<BiChevronRight className="text-lg" />
// 								</div>
// 								<div className="text-red-600">
// 									<ErrorMessage name="email" />
// 								</div>
// 							</div>

// 							<div className=" flex flex-col gap-1">
// 								<div className="flex flex-row items-center justify-centerpy-2 px-4 min-h-[3.7rem] bg-white rounded-[2rem] text-normalBlack gap-1">
// 									<Field
// 										name="password"
// 										type="password"
// 										placeholder="Create password"
// 										className="border-none outline-0 hover:outline-0 focus:outline-0"
// 									/>
// 								</div>
// 								<div className="text-red-600">
// 									<ErrorMessage name="password" />
// 								</div>
// 							</div>

// 							<button
// 								type="submit"
// 								className="self-start w-full max-w-[6.4375rem] py-2 px-4 min-h-[3.7rem] bg-signUpFormtext hover:opacity-95 duration-500 ease-in-out rounded-[2rem] text-normalBlack"
// 							>
// 								{submitting ? <Progress /> : "Sign Up"}
// 							</button>
// 						</Form>
// 					</Formik>
// 				</div>

// 				<div className="flex-1 flex flex-col items-center gap-4 w-full max-w-[25.25rem]">
// 					<CardMedia
// 						sx={{
// 							minHeight: "18.25rem",
// 							width: "100%",
// 						}}
// 						image={registerUser.src}
// 					/>
// 					<DialogContentText className="text-[1.625rem] text-signUpFormtext font-bold">
// 						Join a community of podcast lovers and creators.
// 					</DialogContentText>
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);
// };

// export default SignUpFormDialog;
