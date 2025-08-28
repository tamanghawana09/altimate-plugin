import {
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalTypographyPanel as TypographyPanel,
	__experimentalFontFamilyPicker as FontFamilyPicker,
	ButtonGroup,
	Button,
	RangeControl,
	SelectControl,
	ColorPalette,
	FontSizePicker,
	Card,
	PanelBody,
	CardBody,
} from "@wordpress/components";
import { useEffect, useState } from "react";
import GoogleFontsPicker from "./GoogleFontsPicker";
const ContentDesignSettings = ({ attributes, setAttributes }) => {
	const {
		padding,
		horizontalAlignment,
		verticalAlignment,
		sliderHeight,
		unit,
		sliderWidth,
		gap,
		subtitleColor,
		subtitleFontFamily,
		subtitleFontSize,
		subtitleFontStyle,
		subtitleLineHeight,
		subtitleFontWeight,
		subtitleLetterSpacing,
		subtitleTextTransform,
		subtitleTextDecoration,
		subtitleWordSpacing,
		subtitleAnimationColor,
		subtitleDotColor,
	} = attributes;

	const updateHorizontalAlignment = (newAlign) => {
		setAttributes({ horizontalAlignment: newAlign });
	};
	const updateVerticalAlignment = (newAlign) => {
		setAttributes({ verticalAlignment: newAlign });
	};

	const colors = [
		{ name: "Black", color: "#000000" },
		{ name: "White", color: "#ffffff" },
		{ name: "Blue", color: "#007cba" },
		{ name: "Red", color: "#cc1818" },
		{ name: "Green", color: "#46b450" },
		{ name: "Yellow", color: "#ffb900" },
		{ name: "Orange", color: "#f56e28" },
		{ name: "Purple", color: "#826eb4" },
	];

	return (
		<>
			<div className="agc-slider-settings">
				<BoxControl
					label="Padding"
					values={padding}
					onChange={(value) => setAttributes({ padding: value })}
				/>
				<div className="agc-horizontal-alignment">
					<p>Horizontal Alignment</p>
					<ButtonGroup>
						<Button
							isPrimary={horizontalAlignment === "left"}
							onClick={() => updateHorizontalAlignment("left")}
							title="Left"
						>
							<i class="fas fa-align-left"></i>
						</Button>
						<Button
							isPrimary={horizontalAlignment === "center"}
							onClick={() => updateHorizontalAlignment("center")}
							title="Center"
						>
							<i class="fas fa-align-center"></i>
						</Button>
						<Button
							isPrimary={horizontalAlignment === "right"}
							onClick={() => updateHorizontalAlignment("right")}
							title="Right"
						>
							<i class="fas fa-align-right"></i>
						</Button>
					</ButtonGroup>
				</div>
				<div className="agc-vertical-alignment">
					<p>Vertical Alignment</p>
					<ButtonGroup>
						<Button
							isPrimary={verticalAlignment === "top"}
							onClick={() => updateVerticalAlignment("top")}
							title="Top"
						>
							<i className="fas fa-long-arrow-alt-up"></i>
						</Button>
						<Button
							isPrimary={verticalAlignment === "center"}
							onClick={() => updateVerticalAlignment("center")}
							title="Center"
						>
							<i className="fa-solid fa-arrows-up-down"></i>
						</Button>
						<Button
							isPrimary={verticalAlignment === "bottom"}
							onClick={() => updateVerticalAlignment("bottom")}
							title="Bottom"
						>
							<i className="fa-solid fa-long-arrow-alt-down"></i>
						</Button>
					</ButtonGroup>
				</div>
				<div className="agc-slider-height">
					<RangeControl
						label="Height"
						value={sliderHeight}
						onChange={(value) => setAttributes({ sliderHeight: value })}
					/>
					<SelectControl
						label="Slider Height Unit"
						value={unit}
						options={[
							{ label: "Pixels (px)", value: "px" },
							{ label: "Em", value: "em" },
							{ label: "Percent (%)", value: "%" },
							{ label: "Viewport Height (vh)", value: "vh" },
						]}
						onChange={(value) => setAttributes({ unit: value })}
					/>
				</div>
				<div className="agc-slider-width">
					<RangeControl
						label="Slider Width"
						value={sliderWidth}
						onChange={(value) => setAttributes({ sliderWidth: value })}
					/>
					<SelectControl
						label="Slider Width Unit"
						value={unit}
						options={[
							{ label: "Pixels (px)", value: "px" },
							{ label: "Em", value: "em" },
							{ label: "Percent (%)", value: "%" },
							{ label: "Viewport Height (vh)", value: "vh" },
						]}
						onChange={(value) => setAttributes({ unit: value })}
					/>
				</div>
				<div className="agc-slider-gap">
					<RangeControl
						label="Gap"
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
					/>
					<SelectControl
						label="Slider Gap Unit"
						value={unit}
						options={[
							{ label: "Pixels (px)", value: "px" },
							{ label: "Em", value: "em" },
							{ label: "Percent (%)", value: "%" },
							{ label: "Viewport Height (vh)", value: "vh" },
						]}
						onChange={(value) => setAttributes({ unit: value })}
					/>
				</div>
				<div className="agc-subtitle-container">
					<hr></hr>
					<p>Sub Title Color</p>
					<ColorPalette
						label="Sub Title Color"
						colors={colors}
						value={subtitleColor}
						onChange={(value) => setAttributes({ subtitleColor: value })}
					/>
					<PanelBody title="Subtitle Settings" initialOpen={false}>
						<GoogleFontsPicker
							value={subtitleFontFamily}
							onChange={(value) => setAttributes({ subtitleFontFamily: value })}
						/>
						<label>Font Size</label>
						<FontSizePicker
							value={subtitleFontSize}
							onChange={(size) => setAttributes({ subtitleFontSize: size })}
							withSlider
						/>
						<SelectControl
							label="Font Weight"
							value={subtitleFontWeight}
							options={[
								{ label: "Default", value: "" },
								{ label: "100", value: "100" },
								{ label: "200", value: "200" },
								{ label: "300", value: "300" },
								{ label: "400", value: "400" },
								{ label: "500", value: "500" },
								{ label: "600", value: "600" },
								{ label: "700", value: "700" },
								{ label: "800", value: "800" },
								{ label: "900", value: "900" },
							]}
							onChange={(value) => setAttributes({ subtitleFontWeight: value })}
						/>
						<SelectControl
							label="Text Transform"
							value={subtitleTextTransform}
							options={[
								{ label: "None", value: "none" },
								{ label: "Uppercase", value: "uppercase" },
								{ label: "Lowercase", value: "lowercase" },
								{ label: "Capitalize", value: "capitalize" },
							]}
							onChange={(value) =>
								setAttributes({ subtitleTextTransform: value })
							}
						/>
						<SelectControl
							label="Font Style"
							value={subtitleFontStyle}
							options={[
								{ label: "Normal", value: "normal" },
								{ label: "Italic", value: "italic" },
							]}
							onChange={(value) => setAttributes({ subtitleFontStyle: value })}
						/>
						<SelectControl
							label="Text Decoration"
							value={subtitleTextDecoration}
							options={[
								{ label: "None", value: "none" },
								{ label: "Underline", value: "underline" },
								{ label: "Line Through", value: "line-through" },
								{ label: "Overline", value: "overline" },
							]}
							onChange={(value) =>
								setAttributes({ subtitleTextDecoration: value })
							}
						/>
						<RangeControl
							label="Line Height"
							value={subtitleLineHeight}
							onChange={(value) => setAttributes({ subtitleLineHeight: value })}
							min={1}
							max={10}
							step={0.1}
						/>
						<RangeControl
							label="Letter Spacing"
							value={subtitleLetterSpacing}
							onChange={(value) =>
								setAttributes({ subtitleLetterSpacing: value })
							}
							min={1}
							max={10}
							step={0.1}
						/>
						<RangeControl
							label="Word Spacing"
							value={subtitleWordSpacing}
							onChange={(value) =>
								setAttributes({ subtitleWordSpacing: value })
							}
							min={0}
							max={50}
							step={1}
						/>
					</PanelBody>
					<hr></hr>
					<p>Subtitle Animation Color</p>
					<ColorPalette
						colors={colors}
						value={subtitleAnimationColor}
						onChange={(value) => setAttributes({ subtitleAnimationColor: value })}
					/>
					<p>Subtitle Dot Color</p>
					<ColorPalette
						colors={colors}
						value={subtitleDotColor}
						onChange={(value) => setAttributes({ subtitleDotColor:value })}
					/>
					<hr></hr>
				</div>
			</div>
		</>
	);
};
export default ContentDesignSettings;
