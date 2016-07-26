# element-style
Gets/Sets an element style property

[![testling badge](https://ci.testling.com/kyungw00k/element-style.png)](https://ci.testling.com/kyungw00k/element-style)

## Installation
```
npm install element-style
```
## Usage
```
var elementStyle = require('element-style')

// Set style
elementStyle(document.body, 'paddingLeft', '15px')

// Get style
elementStyle(document.body, 'paddingLeft')
// => '15px'

```

## License
MIT
