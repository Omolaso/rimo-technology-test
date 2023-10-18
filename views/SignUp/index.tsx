"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import { BiArrowBack } from "react-icons/bi";

const SignUpPage: NextPage = () => {
	const router = useRouter();

	return (
		<section className="bg-normalBlack flex items-center justify-center w-full text-white min-h-screen">
			<div className="flex flex-col gap-4 item-center justify-between bg-black w-full max-w-[67rem] mx-auto min-h-[30rem] rounded-[0.3125rem] p-4">
				<div className="flex flex-row items-center justify-between w-full">
					<Typography className="text-lg font-bold text-center">
						Sign Up
					</Typography>
					<button
						type="button"
						title="Back"
						onClick={() => router.back()}
						className="flex items-center justify-center w-full max-w-[5rem]"
					>
						<BiArrowBack />
					</button>
				</div>
				<Formik
					initialValues={{ firstName: "", lastName: "", email: "" }}
					validationSchema={Yup.object({
						firstName: Yup.string().required("Required"),
						lastName: Yup.string().required("Required"),
						email: Yup.string()
							.email("Invalid email address")
							.required("Required"),
					})}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						resetForm();
					}}
				>
					<Form className="flex flex-col items-start justify-between gap-1">
						<div>
							<label htmlFor="firstName">First Name</label>
							<Field name="firstName" type="text" />
							<ErrorMessage name="firstName" />
						</div>

						<div>
							<label htmlFor="lastName">Last Name</label>
							<Field name="lastName" type="text" />
							<ErrorMessage name="lastName" />
						</div>

						<div>
							<label htmlFor="email">Email Address</label>
							<Field name="email" type="email" />
							<ErrorMessage name="email" />
						</div>

						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</div>
		</section>
	);
};
export default SignUpPage;
