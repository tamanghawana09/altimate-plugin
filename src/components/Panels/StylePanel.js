import React, { useState } from 'react';
import { PanelBody } from '@wordpress/components';
import ContentDesignSettings from '../Settings/ContentDesignSettings';
import ButtonDesignSettings from '../Settings/ButtonDesignSettings';

const StylePanel = ({attributes, setAttributes}) => {
    return(
        <>
            <PanelBody title="Content Design Settings" initialOpen={true}>
                <ContentDesignSettings attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>
            <PanelBody title="Button Design Settings" initialOpen={false}>
                <ButtonDesignSettings attributes={attributes} setAttributes={setAttributes}/>
            </PanelBody>
        </>
    );
};
export default StylePanel;