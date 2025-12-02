import React from "react"
import BaseBox from "components/BaseBox/BaseBox.jsx"

class TipBox extends BaseBox {
  getBackgroundColor() { return '#f0f8ff'; }
  getTextColor() { return '#0c5460'; }
  getBorderColor() { return '#e3f2fd'; }
  getIcon() { return '💡'; }
  getCodeBlockBg() { return '#e3f2fd'; }
  getCodeBlockBorder() { return '#1976d2'; }
  getInlineCodeBg() { return '#e3f2fd'; }
  getButtonStyles() {
    return {
      backgroundColor: 'rgba(12, 84, 96, 0.1)',
      color: '#0c5460',
      border: '1px solid rgba(12, 84, 96, 0.3)',
      hoverBg: 'rgba(12, 84, 96, 0.2)'
    };
  }

  render() {
    // Transform tipText to textContent for the base class
    const transformedProps = {
      ...this.props,
      textContent: this.props.tipText || this.props.textContent
    };

    // Temporarily override props for base class render
    const originalProps = this.props;
    this.props = transformedProps;
    const result = super.render();
    this.props = originalProps;

    return result;
  }
}

export default TipBox
