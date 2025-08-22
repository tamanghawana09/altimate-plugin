import {
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	ButtonGroup,
	Button,
	Dashicon,
	RangeControl,
	Flex,
	SelectControl,
	FlexItem,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

const ContentDesignSettings = ({ attributes, setAttributes }) => {
	const { padding, horizontalAlignment, verticalAlignment, sliderHeight } =
		attributes;

	const updateHorizontalAlignment = (newAlign) => {
		setAttributes({ horizontalAlignment: newAlign });
	};
	const updateVerticalAlignment = (newAlign) => {
		setAttributes({ verticalAlignment: newAlign });
	};
	const updateValue = (val) => {
		setAttributes({
			sliderHeight: { ...sliderHeight, value: val },
		});
	};

	const updateUnit = (unit) => {
		setAttributes({
			sliderHeight: { ...sliderHeight, unit },
		});
	};

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
				<RangeControl
					label="Height"
					value={height}
					onChange={(value) => setAttributes({ height: value })}
				/>
				<SelectControl
					label="Unit"
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
		</>
	);
};
export default ContentDesignSettings;
