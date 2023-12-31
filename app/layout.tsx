import type { Metadata } from "next";
import favicon from "./favicon.ico";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RimoTechnology Test",
	description: "RimoTechnology",
	icons: {
		icon: `${favicon.src}`,
		apple: `${favicon.src}`,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
