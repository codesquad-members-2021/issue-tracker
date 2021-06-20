import { css } from "styled-components";

const calcRem = size => `${size / 16}rem`;

const StyledSpaceBetween = css`
	display: flex;
	justify-content: space-between;
`;

const buttonWidths = {
	small: "100px",
	base: "128px",
	lg: "160px",
	xl: "340px",
};
const buttonHeights = {
	small: "28px",
	base: "40px",
	lg: "64px",
};

const fontSizes = {
	xxs: calcRem(12),
	xs: calcRem(13),
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(22),
	xxxl: calcRem(24),
	titleSize: calcRem(32),
};

const paddings = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const margins = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const interval = {
	base: calcRem(50),
	lg: calcRem(100),
	xl: calcRem(150),
	xxl: calcRem(200),
};

const verticalInterval = {
	base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "450px",
	tablet: "768px",
	tabletL: "1024px",
};

const border_radius = {
	small: "10px",
	base: "11px",
	lg: "16px",
	xl: "20px",
	xxl: "30px",
};
const border_radius_mix = {
	right: "0 11px 11px 0",
	left: "11px 0 0 11px",
	all: "11px",
};
const grayScale = {
	title_active: "#14142B",
	body: "#4E4B66",
	label: "#6E7191",
	placeholder: "#A0A3BD",
	line: "#D9DBE9",
	input_background: "#EFF0F6",
	background: "#F7F7FC",
	off_white: "#FEFEFE",
	black: "#000000",
};

const colors = {
	blue: "#007AFF",
	light_blue: "#C7EBFF",
	dark_blue: "#004DE3",
	purple: "#0025E7",
	light_purple: "#CCD4FF",
	dark_purple: "#020070",
	red: "#FF3B30",
	light_red: "#FFD1CF",
	dark_red: "#C60B00",
	green: "#34C759",
	light_green: "#DDFFE6",
	dark_green: "#00A028",
};

const getColorByCondition = (condition, colorA, colorB) => {
	return condition ? colorA : colorB;
};

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
	fontSizes,
	grayScale,
	colors,
	deviceSizes,
	border_radius,
	border_radius_mix,
	device,
	paddings,
	margins,
	interval,
	verticalInterval,
	StyledSpaceBetween,
	buttonWidths,
	buttonHeights,
	getColorByCondition,
};

export default theme;
