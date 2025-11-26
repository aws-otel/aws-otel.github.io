import React from "react"
import BaseBox from "components/BaseBox/BaseBox.jsx"

class InfoBox extends BaseBox {
  getBackgroundColor() { return '#f5f5f5'; }
  getTextColor() { return '#424242'; }
  getBorderColor() { return '#e0e0e0'; }
  getIcon() { return '📋'; }
  getCodeBlockBg() { return '#f1f1f1'; }
  getCodeBlockBorder() { return '#007acc'; }
  getInlineCodeBg() { return '#e8e8e8'; }

  render() {
    // Transform infoText to textContent for the base class
    const transformedProps = {
      ...this.props,
      textContent: this.props.infoText || this.props.textContent
    };

    // Temporarily override props for base class render
    const originalProps = this.props;
    this.props = transformedProps;
    const result = super.render();
    this.props = originalProps;

    return result;
  }
}

export default InfoBox
