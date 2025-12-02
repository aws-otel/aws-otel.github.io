import React from "react"
import BaseBox from "components/BaseBox/BaseBox.jsx"

class WarningBox extends BaseBox {
  getBackgroundColor() { return '#fff3cd'; }
  getTextColor() { return '#856404'; }
  getBorderColor() { return '#ffeaa7'; }
  getIcon() { return '⚠️'; }
  getCodeBlockBg() { return '#fff3cd'; }
  getCodeBlockBorder() { return '#ffc107'; }
  getInlineCodeBg() { return '#fff3cd'; }
  getButtonStyles() {
    return {
      backgroundColor: 'rgba(133, 100, 4, 0.1)',
      color: '#856404',
      border: '1px solid rgba(133, 100, 4, 0.3)',
      hoverBg: 'rgba(133, 100, 4, 0.2)'
    };
  }

  render() {
    // Transform warningText to textContent for the base class
    const transformedProps = {
      ...this.props,
      textContent: this.props.warningText || this.props.textContent
    };

    // Temporarily override props for base class render
    const originalProps = this.props;
    this.props = transformedProps;
    const result = super.render();
    this.props = originalProps;

    return result;
  }
}

export default WarningBox
