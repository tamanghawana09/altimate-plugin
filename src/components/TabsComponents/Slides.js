import React, { useState } from 'react';
import { ToggleControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
const Slides = ({attributes,setAttributes}) => {
    const { showIcons } = attributes;

    return(
        <>
            <div className='agc-toggle-button-color'>
                <ToggleControl 
                    label="Show Button Icons"
                    checked={showIcons}
                    onChange={(value) => setAttributes({ showIcons:value })}
                />
            </div>
        </>
    );
};
export default Slides;