"use client";

import { UIComponentPage } from "@/util/util-functions";
import Link from "next/link";
import classes from "./side-navigation.module.css";
import { useState } from "react";

type SideNavigationProps = {
	componentPages: UIComponentPage[];
};

const SideNavigation = (props: SideNavigationProps) => {
	const { componentPages } = props;

	const [selectedPage, setSelectedPage] = useState("About");

	const handleAboutClick = () => {
		console.log("about clicked");
		setSelectedPage("About");
	};

	const handleComponentClick = (componentName: string) => {
		console.log("component clicked");
		// utility function to figure out which component to generate
		setSelectedPage(componentName);
	};

	return (
		<ul className={classes.container}>
			<li
				onClick={handleAboutClick}
				className={
					selectedPage === "About" ? classes.selected : classes.default
				}
			>
				<Link href="/">About</Link>
			</li>
			{componentPages.map((componentPage, index) => {
				return (
					<li
						key={`component-name-${index}`}
						onClick={() => handleComponentClick(componentPage.name)}
						className={
							selectedPage === componentPage.name
								? classes.selected
								: classes.default
						}
					>
						<Link href={componentPage.url}>{componentPage.name}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default SideNavigation;
