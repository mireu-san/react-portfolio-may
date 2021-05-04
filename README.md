# Mireu Library

Concept is the library. React and ES6 base.

# Blueprint
- [x] 1. Navigation bar (Horizontal first - medium size)
- [ ] 2. Footer section (bottom part - medium size)
- [x] 3. Front page (first initial page) - may include self-introduction here
- [x] 4. Skills page
- [x] 5. Portfolio page
- [x] 6. Contact Page
- [ ] 7. Image for Front, skills, portfolio, contact page
- [x] Be sure to keep the SPA feature!
- [x] Let URL to be exact - use Switch feature from react-router-dom

# Technical note
1. Removed typescript flag and NODE_PATH support
We've removed the deprecated typescript flag when creating a new app. Use --template typescript instead. We've also dropped deprecated NODE_PATH flag as this has been replaced by setting the base path in jsconfig.json.
- source: https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md#removed-typescript-flag-and-node_path-support
- Solution : created jsconfig.json

2. Used css module to avoid any collision of duplicated stuff in future work
https://react.vlpt.us/styling/02-css-module.html

3. npm add styled-components + react-router-dom = CS in JS will be the one to apply. Module CSS won't be applied in this project.