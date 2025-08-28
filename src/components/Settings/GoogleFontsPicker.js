import { SelectControl } from "@wordpress/components";
import { useEffect, useState } from "react";


const GoogleFontsPicker = ({ value, onChange }) => {
	const [fonts, setFonts] = useState([{ label: "Default", value: "inherit" }]);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBgSgk9ol_8AwY9pnetoR2_KBY7GJlxnLE&sort=popularity`,
		)
			.then((res) => res.json())
			.then((data) => {
				const fontOptions = data.items.slice(0, 50).map((font) => ({
					label: font.family,
					value: font.family,
				}));
				setFonts((prev) => [...prev, ...fontOptions]);
			});
	}, []);

	return (
		<SelectControl
			label="Font Family"
			value={value}
			options={fonts}
			onChange={onChange}
		/>
	);
};
export default GoogleFontsPicker;
