type LogoProps = {
	onClick: () => void;
};

const Logo = (props: LogoProps) => {
	const { onClick } = props;
	return (
		<p style={{ fontWeight: "bold", cursor: "pointer" }} onClick={onClick}>
			UI Playground
		</p>
	);
};

export default Logo;
