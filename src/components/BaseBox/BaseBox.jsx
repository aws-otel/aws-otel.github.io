import React from "react"

class BaseBox extends React.Component {
  parseCodeMarkdown(text) {
    if (typeof text !== 'string') return text;

    // Replace triple backticks (code blocks) first
    text = text.replace(/```([^`]+)```/g, (match, code) => {
      return `<div style="font-family: monospace; background-color: ${this.getCodeBlockBg()}; padding: 12px; border-radius: 4px; margin: 8px 0; border-left: 4px solid ${this.getCodeBlockBorder()}; overflow-x: auto; white-space: pre;">${code.trim()}</div>`;
    });

    // Replace single backticks (inline code)
    text = text.replace(/`([^`]+)`/g, (match, code) => {
      return `<span style="font-family: monospace; background-color: ${this.getInlineCodeBg()}; padding: 2px 4px; border-radius: 3px; font-size: 14px;">${code}</span>`;
    });

    return text;
  }

  // Methods to be overridden by child components
  getBackgroundColor() { return '#f5f5f5'; }
  getTextColor() { return '#424242'; }
  getBorderColor() { return '#e0e0e0'; }
  getIcon() { return '📋'; }
  getCodeBlockBg() { return '#f1f1f1'; }
  getCodeBlockBorder() { return '#007acc'; }
  getInlineCodeBg() { return '#e8e8e8'; }
  getButtonStyles() {
    return {
      backgroundColor: 'rgba(66, 66, 66, 0.1)',
      color: '#424242',
      border: '1px solid rgba(66, 66, 66, 0.3)',
      hoverBg: 'rgba(66, 66, 66, 0.2)'
    };
  }

  render() {
    const { textContent, buttonText, hyperlink, children, scale = 1.0 } = this.props;
    const buttonStyles = this.getButtonStyles();

    return (
      <div style={{
        backgroundColor: this.getBackgroundColor(),
        color: this.getTextColor(),
        padding: `${16 * scale}px ${20 * scale}px`,
        marginBottom: `${20 * scale}px`,
        borderRadius: `${6 * scale}px`,
        border: `1px solid ${this.getBorderColor()}`,
        display: 'flex',
        alignItems: 'stretch',
        gap: `${16 * scale}px`,
        minHeight: `${60 * scale}px`,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        margin: scale < 1 ? `${20 * scale * (1 - scale)}px auto ${20 * scale}px auto` : `0 auto ${20 * scale}px auto`
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: `${40 * scale}px`,
          fontSize: `clamp(${24 * scale}px, 4vw, ${48 * scale}px)`,
          lineHeight: '1'
        }}>
          {this.getIcon()}
        </div>
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            fontWeight: 'normal',
            lineHeight: '1.6',
            fontFamily: 'inherit',
            width: '100%',
            fontSize: `${14 * scale}px`,
            whiteSpace: 'pre-line'
          }} dangerouslySetInnerHTML={{
            __html: children ? null : (textContent ? this.parseCodeMarkdown(textContent.replace(/\\n/g, '\n')) : '')
          }}>
            {children}
          </div>
        </div>
        {buttonText && hyperlink && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <a
              href={hyperlink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: buttonStyles.backgroundColor,
                color: buttonStyles.color,
                textDecoration: 'none',
                padding: `${4 * scale}px ${8 * scale}px`,
                borderRadius: `${3 * scale}px`,
                border: buttonStyles.border,
                fontSize: `${12 * scale}px`,
                fontWeight: 'normal',
                transition: 'background-color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonStyles.hoverBg}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default BaseBox
