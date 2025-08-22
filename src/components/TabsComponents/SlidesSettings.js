import React, { useState } from 'react';
import { ToggleControl } from "@wordpress/components";
import { __experimentalNumberControl as NumberControl,} from '@wordpress/components';

const SlidesSettings = ({attributes, setAttributes}) => {
    const { slidesby, slideSpeed, zIndex, autoplay, autoplaySpeed, loop, showArrows, showDots, adaptiveHeight} = attributes;
    return(
        <div>
            <NumberControl 
                label="Slides By:"
                value={slidesby}
                onChange={(value) => setAttributes({ slidesby:value })}
                min={1}
                max={300}
                step={1}
            />
            <NumberControl
                label="Slide Speed:" 
                value={slideSpeed}
                onChange={(value) => setAttributes({ slideSpeed:value })}
                min={100}
                max={3000}
                step={100}
            />
            <NumberControl
                label="Z-index:"
                value={zIndex}
                onChange={(value) => setAttributes({ zIndex:value })}
                min={-10}
                max={9999}
                step={1}
            />
            <ToggleControl 
                label="Autoplay"
                checked={autoplay}
                onChange={(value) => setAttributes({ autoplay:value })}
            />
            <NumberControl
                label="Autoplay Speed:"
                value={autoplaySpeed}
                onChange={(value) => setAttributes({ autoplaySpeed:value })}
                min={500}
                max={10000}
                step={100} 
            />
            <ToggleControl 
                label="Loop"
                checked={loop}
                onChange={(value) => setAttributes({ loop:value })}
            />
            <ToggleControl 
                label="Show Next/Prev"
                checked={showArrows}
                onChange={(value) => setAttributes({ showArrows:value })}
            />
            <ToggleControl 
                label="Show Dots"
                checked={showDots}
                onChange={(value) => setAttributes({ showDots:value })}
            />
            <ToggleControl
                label="Adaptive Height"
                checked={adaptiveHeight}
                onChange={(value) => setAttributes({ adaptiveHeight:value })} 
            />

        </div>
    );
};
export default SlidesSettings;