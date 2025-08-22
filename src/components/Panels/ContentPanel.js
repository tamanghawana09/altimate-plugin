import React, { useState } from 'react';
import { PanelBody, RangeControl, Button, TextControl, SelectControl } from "@wordpress/components";
import Slides from '../TabsComponents/Slides';
import DefaultSkin from '../Skins/DefaultSkin';
import ClassicSkin from '../Skins/ClassicSkin';
import ExclusiveSkin from '../Skins/ExclusiveSkin';
import StandardSkin from '../Skins/StandardSkin';
import SuperiorSkin from '../Skins/SuperiorSkin';
import AdvancedSkin from '../Skins/AdvancedSkin';
import SlidesSettings from '../TabsComponents/SlidesSettings';
import SocialIconsPanel from './SocialIconsPanel';

const ContentPanel = ({attributes, setAttributes}) => {
  const [selectedSkin, setSelectedSkin] = useState('default');
  const [activeTab, setActiveTab] = useState('slides')

  const renderTab = () =>{
    switch(activeTab){
      case 'slides':
        return <Slides attributes={attributes} setAttributes={setAttributes}/>;
      case 'settings':
        return <SlidesSettings attributes={attributes} setAttributes={setAttributes}/>;
      default:
        return null;
    }
  }

  const renderSkinComponent = () =>{
    switch (selectedSkin){
      case 'default':
        return <DefaultSkin />;
      case 'classic':
        return <ClassicSkin />;
      case 'exclusive':
        return <ExclusiveSkin />;
      case 'standard':
        return <StandardSkin />;
      case 'superior':
        return <SuperiorSkin />;
      case 'advance':
        return <AdvancedSkin />;
      default:
        return <DefaultSkin />; 
    }
  }

  return (
    <>
      <PanelBody title='Slider Settings'>
        <div className='agc-slider-settings'>
          <div className='agc-skin-container'>
            <label htmlFor='skin-select'>
              Skins:
            </label>
            <SelectControl 
              value={selectedSkin}
              options={[
                { label: 'Default', value: 'default'},
                { label: 'Classic', value: 'classic'},
                { label: 'Exclusive', value: 'exclusive'},
                { label: 'Standard', value: 'standard'},
                { label: 'Superior', value: 'superior'},
                { label: 'Advance', value: 'advance'},
              ]}
              onChange={(value) => setSelectedSkin(value)}
            />
            
          </div>
          <div>{ renderSkinComponent()}</div>
          <div className='agc-slider-tab-container'>
            <div className='agc-slider-tab-button'>
              <button className={activeTab === 'slides' ? 'active': ''}
              onClick={() => setActiveTab('slides')}>
                Slides
              </button>
              <button className={activeTab === 'settings' ? 'active': ''}
              onClick={() => setActiveTab('settings')}>
                Settings
              </button>
            </div>
            <div className='agc-slider-tab-content'>{renderTab()}</div>
          </div>
        </div>
      </PanelBody>
      <PanelBody title='Social Icon Settings' initialOpen={false}>
        <SocialIconsPanel attributes={attributes} setAttributes={setAttributes} />
      </PanelBody>
    </>
  );
};

export default ContentPanel;
