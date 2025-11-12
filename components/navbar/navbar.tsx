"use client";
import Logo from "../icons/logo/logo";
import SettingsIcon from "../icons/settings-icon/settings-icon";
import SearchBar from "../searchbar/searchbar";
import classes from "./navbar.module.css";

const Navbar = () => {
	const handleLogoClick = () => {
		console.log("logo clicked");
	};

	const handleSettingsIconClick = () => {
		console.log("settings icon clicked");
	};

	return (
		<div className={classes.container}>
			<Logo onClick={handleLogoClick} />
			<SearchBar />
			<SettingsIcon onClick={handleSettingsIconClick} />
		</div>
	);
};

export default Navbar;
