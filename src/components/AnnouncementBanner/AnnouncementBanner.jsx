import React from "react"
import BaseBox from "components/BaseBox/BaseBox.jsx"

class AnnouncementBanner extends BaseBox {
  getBackgroundColor() { return '#ff9500'; }
  getTextColor() { return 'white'; }
  getBorderColor() { return '#e67e00'; }
  getIcon() { return '📢'; }
  getCodeBlockBg() { return 'rgba(255, 255, 255, 0.2)'; }
  getCodeBlockBorder() { return 'rgba(255, 255, 255, 0.5)'; }
  getInlineCodeBg() { return 'rgba(255, 255, 255, 0.2)'; }
  getButtonStyles() {
    return {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      hoverBg: 'rgba(255, 255, 255, 0.3)'
    };
  }

  render() {
    // Transform bannerText to textContent for the base class
    const transformedProps = {
      ...this.props,
      textContent: this.props.bannerText || this.props.textContent
    };

    // Temporarily override props for base class render
    const originalProps = this.props;
    this.props = transformedProps;
    const result = super.render();
    this.props = originalProps;

    return result;
  }
}

export default AnnouncementBanner
