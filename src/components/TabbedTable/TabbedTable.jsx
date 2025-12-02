import React, { useState } from 'react';

const TabbedTable = ({
  config,
  defaultTab,
  customStyles = {},
  dataTransform
}) => {
  const initialTab = defaultTab || config?.defaultTab || Object.keys(config?.tabs || {})[0];

  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedCell, setCopiedCell] = useState(null);

  // Copy to clipboard function
  const copyToClipboard = async (text, cellId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCell(cellId);
      setTimeout(() => setCopiedCell(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (!config || !config.tabs) {
    return <div>No configuration provided for TabbedTable</div>;
  }

  // Default styles that can be overridden
  const defaultStyles = {
    container: { marginBottom: '20px' },
    description: { marginBottom: '20px', color: '#6c757d' },
    tabContainer: { borderBottom: '1px solid #e0e0e0', marginBottom: '0' },
    tabList: { display: 'flex', gap: '0', flexWrap: 'wrap' },
    tab: {
      padding: '12px 24px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
      borderBottom: '3px solid transparent',
      backgroundColor: 'transparent',
      transition: 'all 0.2s ease'
    },
    activeTab: {
      borderBottom: '3px solid #007bff',
      color: '#007bff'
    },
    inactiveTab: {
      color: '#6c757d'
    },
    tableContainer: { border: '1px solid #e0e0e0', borderTop: 'none' },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    header: {
      backgroundColor: '#f8f9fa',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold'
    },
    cell: {
      padding: '8px 12px',
      borderBottom: '1px solid #f0f0f0'
    },
    codeCell: {
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      fontSize: '14px',
      backgroundColor: '#f8f9fa',
      wordBreak: 'break-all'
    },
    linkCell: {
      color: '#007bff',
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    boldCell: {
      fontWeight: 'bold'
    },
    copyableCell: {
      position: 'relative'
    },
    copyButton: {
      marginLeft: '8px',
      padding: '2px 6px',
      fontSize: '12px',
      color: '#666',
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      borderRadius: '3px',
      cursor: 'pointer'
    },
    copyButtonHover: {
      backgroundColor: '#f5f5f5',
      borderColor: '#999'
    },
    copiedFeedback: {
      marginLeft: '8px',
      padding: '2px 6px',
      fontSize: '12px',
      color: '#555',
      backgroundColor: '#f8f8f8',
      border: '1px solid #ddd',
      borderRadius: '3px'
    }
  };

  // Merge custom styles with defaults
  const styles = { ...defaultStyles, ...customStyles };

  const tabData = config.tabs[activeTab];
  const columns = config.columns || [];

  if (columns.length === 0) {
    return <div>No columns defined for TabbedTable</div>;
  }

  // Generic data processing function
  const getTableData = () => {
    if (!tabData) return [];

    // Use custom data transform if provided
    if (dataTransform && typeof dataTransform === 'function') {
      return dataTransform(tabData, config);
    }

    // Use tab-specific data transform if provided
    if (tabData.dataTransform && typeof tabData.dataTransform === 'function') {
      return tabData.dataTransform(tabData, config);
    }

    // Handle different data formats
    const dataSource = tabData.data || tabData.items || tabData.rows || tabData.arns || tabData;

    // Handle array format: [{ col1: "val1", col2: "val2" }, ...]
    if (Array.isArray(dataSource)) {
      return dataSource;
    }

    // Handle object format: { "key1": "value1", "key2": "value2", ... }
    if (typeof dataSource === 'object' && dataSource !== null) {
      // If columns are defined, try to map object to table format
      if (columns.length >= 2) {
        const keyColumn = columns[0];
        const valueColumn = columns[1];

        // Handle mapping for display names
        const displayNames = config.displayNames || config.regionDisplayNames || {};

        return Object.entries(dataSource).map(([key, value]) => ({
          [keyColumn.key]: displayNames[key] || key,
          [valueColumn.key]: value,
          // Add any additional columns with empty values
          ...columns.slice(2).reduce((acc, col) => {
            acc[col.key] = '';
            return acc;
          }, {})
        }));
      }
    }

    return [];
  };

  const tableData = getTableData();

  const getTabStyle = (tabKey) => ({
    ...styles.tab,
    ...(activeTab === tabKey ? styles.activeTab : styles.inactiveTab)
  });

  const getCellStyle = (column, value, rowData) => {
    let cellStyle = { ...styles.cell };

    // Apply column-specific styles
    if (column.isCode) {
      cellStyle = { ...cellStyle, ...styles.codeCell };
    }
    if (column.isBold) {
      cellStyle = { ...cellStyle, ...styles.boldCell };
    }
    if (column.isLink) {
      cellStyle = { ...cellStyle, ...styles.linkCell };
    }
    if (column.isCopyable) {
      cellStyle = { ...cellStyle, ...styles.copyableCell };
    }

    // Apply custom styles based on column configuration
    if (column.style) {
      if (typeof column.style === 'function') {
        cellStyle = { ...cellStyle, ...column.style(value, rowData) };
      } else {
        cellStyle = { ...cellStyle, ...column.style };
      }
    }

    return cellStyle;
  };

  const renderCellContent = (item, column) => {
    let value = item[column.key];

    // Apply column transformation if specified
    if (column.transform && typeof column.transform === 'function') {
      value = column.transform(value, item);
    }

    // Apply column formatting
    if (column.format && typeof column.format === 'function') {
      value = column.format(value, item);
    }

    // Handle different display types
    if (column.isCode) {
      return <code>{value}</code>;
    }

    if (column.isLink && column.href) {
      const href = typeof column.href === 'function' ? column.href(value, item) : column.href;
      return <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>;
    }

    if (column.render && typeof column.render === 'function') {
      return column.render(value, item);
    }

    return value;
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabContainer}>
        <div style={styles.tabList}>
          {Object.entries(config.tabs).map(([key, data]) => (
            <button
              key={key}
              style={getTabStyle(key)}
              onClick={() => setActiveTab(key)}
            >
              {data.label}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  style={{
                    ...styles.header,
                    ...(column.headerStyle || {}),
                    ...(column.width ? { width: column.width } : {})
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                {columns.map((column, colIndex) => {
                  const cellId = `${index}-${colIndex}`;
                  const cellValue = item[column.key];
                  const isCopied = copiedCell === cellId;

                  return (
                    <td
                      key={colIndex}
                      style={getCellStyle(column, cellValue, item)}
                    >
                      {renderCellContent(item, column)}
                      {column.isCopyable && (
                        <>
                          {isCopied ? (
                            <span style={styles.copiedFeedback} title="Copied to clipboard">✓</span>
                          ) : (
                            <button
                              style={styles.copyButton}
                              onClick={() => copyToClipboard(cellValue, cellId)}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = styles.copyButtonHover.backgroundColor;
                                e.target.style.color = styles.copyButtonHover.color;
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = styles.copyButton.backgroundColor;
                                e.target.style.color = styles.copyButton.color;
                              }}
                              title="Copy to clipboard"
                            >
                              ⧉
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabbedTable;
