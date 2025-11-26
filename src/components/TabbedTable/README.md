# TabbedTable Component

A highly flexible and configurable React component for displaying tabular data with tabs. Supports any number of columns, custom styling, data transformation, and various display formats.

## Features

- **Flexible Column Configuration**: Support for any number of columns with custom styling
- **Multiple Data Formats**: Handles arrays, objects, and custom data structures
- **Custom Rendering**: Support for code blocks, links, custom formatting, and rendering functions
- **Data Transformation**: Built-in and custom data transformation functions
- **Responsive Design**: Clean, professional styling that works across devices
- **Extensible**: Easy to customize styles and behavior

## Basic Usage

```jsx
import TabbedTable from 'components/TabbedTable/TabbedTable.jsx';
import { myTableConfig } from 'config/myTableConfig.js';

function MyComponent() {
  return <TabbedTable config={myTableConfig} />;
}
```

## Configuration Structure

```javascript
const config = {
  defaultTab: "tab1",                     // Optional: Initial active tab
  displayNames: {                         // Optional: Mapping for display names
    "key1": "Display Name 1",
    "key2": "Display Name 2"
  },
  tabs: {
    tab1: {
      label: 'Tab 1',                     // Required: Tab display name
      data: [...],                        // Required: Tab data (see formats below)
      dataTransform: (tabData, config) => [...] // Optional: Custom transform
    },
    tab2: {
      label: 'Tab 2',
      data: [...]
    }
  },
  columns: [                              // Required: Column definitions
    {
      key: 'columnKey',                   // Required: Data property key
      label: 'Column Header',             // Required: Column header text
      width: '25%',                       // Optional: Column width
      isCode: true,                       // Optional: Render as code block
      isBold: true,                       // Optional: Bold text
      isLink: true,                       // Optional: Render as link
      href: 'https://...',                // Optional: Link URL (static or function)
      style: {...},                       // Optional: Custom cell styles (object or function)
      headerStyle: {...},                 // Optional: Custom header styles
      transform: (value, row) => {...},   // Optional: Value transformation
      format: (value, row) => {...},      // Optional: Value formatting
      render: (value, row) => {...}       // Optional: Custom render function
    }
  ]
};
```

## Data Formats

### Array Format (Recommended)
```javascript
tabs: {
  myTab: {
    label: 'My Tab',
    data: [
      { col1: 'value1', col2: 'value2', col3: 'value3' },
      { col1: 'value4', col2: 'value5', col3: 'value6' }
    ]
  }
}
```

### Object Format (with automatic mapping)
```javascript
tabs: {
  myTab: {
    label: 'My Tab',
    data: {
      "key1": "value1",
      "key2": "value2"
    }
  }
}
// Automatically maps to: [{ col1: 'key1', col2: 'value1' }, ...]
```

### Custom Data Transform
```javascript
tabs: {
  myTab: {
    label: 'My Tab',
    data: { /* any format */ },
    dataTransform: (tabData, config) => {
      // Transform tabData.data into array format
      return transformedArray;
    }
  }
}
```

## Column Configuration Options

### Basic Column
```javascript
{ key: 'name', label: 'Name' }
```

### Code Column
```javascript
{ key: 'version', label: 'Version', isCode: true }
```

### Link Column
```javascript
{
  key: 'docs',
  label: 'Documentation',
  isLink: true,
  href: (value, row) => value, // Dynamic URL
  render: () => 'View Docs'    // Custom link text
}
```

### Styled Column
```javascript
{
  key: 'status',
  label: 'Status',
  style: (value, row) => ({
    color: value === 'active' ? '#28a745' : '#dc3545',
    fontWeight: 'bold'
  })
}
```

### Custom Width Column
```javascript
{ key: 'description', label: 'Description', width: '40%' }
```

### Transform Column
```javascript
{
  key: 'price',
  label: 'Price',
  transform: (value) => `$${value.toFixed(2)}`,
  isCode: true
}
```

## Usage Examples

### 2-Column Table (Key-Value pairs)
```javascript
const simpleConfig = {
  tabs: {
    prod: {
      label: 'Production',
      data: {
        "api_url": "https://api.prod.com",
        "timeout": "30s",
        "retries": "3"
      }
    }
  },
  columns: [
    { key: 'setting', label: 'Setting', isBold: true },
    { key: 'value', label: 'Value', isCode: true }
  ]
};
```

### 5-Column Table (Complex data)
```javascript
const complexConfig = {
  tabs: {
    services: {
      label: 'Services',
      data: [
        {
          service: 'API Gateway',
          status: 'healthy',
          uptime: '99.9%',
          lastDeploy: '2024-01-15',
          owner: 'Platform Team'
        }
      ]
    }
  },
  columns: [
    { key: 'service', label: 'Service', isBold: true },
    {
      key: 'status',
      label: 'Status',
      style: (value) => ({
        color: value === 'healthy' ? '#28a745' : '#dc3545'
      })
    },
    { key: 'uptime', label: 'Uptime', isCode: true },
    { key: 'lastDeploy', label: 'Last Deploy' },
    { key: 'owner', label: 'Owner' }
  ]
};
```

### Custom Props Usage
```jsx
<TabbedTable
  config={myConfig}
  defaultTab="specificTab"       // Override default tab
  customStyles={{                // Custom styling
    activeTab: { color: '#red' },
    table: { fontSize: '14px' }
  }}
  dataTransform={(tabData, config) => {  // Global data transform
    return customTransformFunction(tabData, config);
  }}
/>
```

## Styling Customization

### Custom Styles Object
```javascript
const customStyles = {
  container: { marginBottom: '30px' },
  activeTab: { borderBottom: '3px solid #red' },
  table: { fontSize: '14px' },
  codeCell: { backgroundColor: '#f0f0f0' }
};

<TabbedTable config={config} customStyles={customStyles} />
```

### Column-Specific Styles
```javascript
columns: [
  {
    key: 'priority',
    label: 'Priority',
    style: (value) => ({
      backgroundColor:
        value === 'high' ? '#ffe6e6' :
        value === 'medium' ? '#fff3cd' :
        '#e6f7ff',
      padding: '4px 8px',
      borderRadius: '4px'
    })
  }
]
```

## Advanced Features

### Custom Render Function
```javascript
{
  key: 'actions',
  label: 'Actions',
  render: (value, row) => (
    <div>
      <button onClick={() => edit(row.id)}>Edit</button>
      <button onClick={() => delete(row.id)}>Delete</button>
    </div>
  )
}
```

### Data Transformation
```javascript
tabs: {
  myTab: {
    label: 'My Tab',
    data: complexApiResponse,
    dataTransform: (tabData, config) => {
      return tabData.data.map(item => ({
        name: item.metadata.name,
        version: item.spec.version,
        status: item.status.phase
      }));
    }
  }
}
```

## Migration from Legacy Format

The component automatically handles legacy formats:

```javascript
// Old format (still supported)
tabs: {
  myTab: {
    arns: [
      { region: 'us-east-1', arn: 'arn:...' }
    ]
  }
}

// New generic format
tabs: {
  myTab: {
    data: [
      { region: 'us-east-1', arn: 'arn:...' }
    ]
  }
}
```

## Error Handling

The component includes built-in error handling:
- Missing configuration
- Empty column definitions
- Invalid data formats
- Missing required properties

## Best Practices

1. **Use descriptive column keys**: Makes data mapping clearer
2. **Define column widths**: For tables with many columns
3. **Use data transforms**: Keep raw data separate from display logic
4. **Leverage custom styling**: For status indicators and visual hierarchy
5. **Test with different data sizes**: Ensure responsive behavior
