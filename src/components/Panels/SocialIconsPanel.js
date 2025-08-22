import { Button, TextControl, ToggleControl, PanelBody } from "@wordpress/components";
const SocialIconsPanel = ({ attributes, setAttributes }) =>{
    const { socialIcons = [] } = attributes;
    
    const addNewIcon = () =>{
        setAttributes({
            socialIcons:[
                ...socialIcons,
                { icon: "", label: "", url: "", openInNewTab: false},
            ],
        });
    };

    const updateIcon = (index, field, value) => {
        const updatedIcons = socialIcons.map((icon, i) =>
            i === index ? { ...icon, [field]: value } : icon
        );
        setAttributes({ socialIcons: updatedIcons }); 
    };
    
    const removeIcon = (index) => {
        const filteredIcons = socialIcons.filter((_,i) => i !== index);
        setAttributes({ socialIcons: filteredIcons })
    };

    return(
        <>
            {socialIcons.map((iconItem, index) => (
                <PanelBody 
                    key={index}
                    style={{ marginBottom: 10}}
                    title={iconItem.label ? iconItem.label : `Social Icon ${index + 1}`}
                    initialOpen={false} >
                        <TextControl
                            label="Icon Class"
                            value={iconItem.icon}
                            onChange={(value) => updateIcon(index, "icon", value)}
                            help="Example: fab fa-facebook" 
                        />
                        <TextControl
                            label="Label"
                            value={iconItem.label}
                            onChange={(value) => updateIcon(index, "label", value)} 
                        />
                        <TextControl
                            label="URL"
                            value={iconItem.url}
                            onChange={(value) => updateIcon(index,"url", value)} 
                        />
                        <div className="agc-toggle-button-color">
                            <ToggleControl
                                label="Open in New Tab"
                                checked={iconItem.openInNewTab}
                                onChange={(value) => updateIcon(index, "openInNewTab", value)} 
                            />
                        </div>
                        
                        <Button isDestructive onClick={() => removeIcon(index)}>
                            Remove
                        </Button>
                    
                </PanelBody>
            ))}
            <Button isPrimary onClick={addNewIcon}>
                Add Social Icon
            </Button>
        </>
    );

};
export default SocialIconsPanel;