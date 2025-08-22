import React, { useState } from 'react';
import ContentPanel from '../Panels/ContentPanel';
import StylePanel from '../Panels/StylePanel';
import AdvancedPanel from '../Panels/AdvancedPanel';


const Tabs = ({attributes, setAttributes}) => {
  const [activeTab, setActiveTab] = useState('content');

  const renderPanel = () => {
    switch (activeTab) {
      case 'content':
        return <ContentPanel attributes={attributes} setAttributes={setAttributes}/>;
      case 'style':
        return <StylePanel attributes={attributes} setAttributes={setAttributes}/>
      case 'advanced':
        return <AdvancedPanel attributes={attributes} setAttributes={setAttributes}/>;
      default:
        return null;
    }
  };

  return (
    <div className="altimate-gutenberg-tabs-wrapper">
      <div className="altimate-gutenberg-tabs-header">
        <button
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button
          className={activeTab === 'style' ? 'active' : ''}
          onClick={() => setActiveTab('style')}
        >
          Style
        </button>
        <button
          className={activeTab === 'advanced' ? 'active' : ''}
          onClick={() => setActiveTab('advanced')}
        >
          Advanced
        </button>
      </div>
      <div className="altimate-gutenberg-tab-panel">{renderPanel()}</div>
    </div>
  );
};

export default Tabs;
