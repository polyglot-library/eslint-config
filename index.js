module.exports = {
  "extends": [
    "plugin:react/recommended",
    "google"
  ],
  "plugins": [
    "babel",
    "react"
  ],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "babel/camelcase": [ "error",
      {
        "ignoreDestructuring":true,
        "properties":"never"
      }
    ],
    "max-len":[ "error", {
      "code": 100,
      "tabWidth": 4,
      "ignoreComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreUrls": true
    }]
  },
};
