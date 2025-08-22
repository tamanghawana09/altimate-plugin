import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { PanelBody, RangeControl, Button, TextControl, SelectControl } from "@wordpress/components";
import './editor.scss';
import './style.scss';
import Tabs from '../components/TabsComponents/Tabs';
 export default function Edit({attributes, setAttributes}) {
	return (
        <>
            <InspectorControls>
                <PanelBody title='Slider'>
                    <Tabs attributes={attributes} setAttributes={setAttributes}/>
                </PanelBody>
            </InspectorControls>
            
            <p { ...useBlockProps() }>
			{ __(
				'Altimate Banner Carousel – hello from the editor!',
				'altimate-banner-carousel'
			) }
		</p>
        </>
	);
}
