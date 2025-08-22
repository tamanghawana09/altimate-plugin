import React, { useState } from 'react';
import { PanelBody } from '@wordpress/components';
import ContentDesignSettings from '../Settings/ContentDesignSettings';

const StylePanel = ({attributes, setAttributes}) => {
    return(
        <>
            <PanelBody title="Content Design Settings">
                <ContentDesignSettings attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>
        </>
    );
};
export default StylePanel;