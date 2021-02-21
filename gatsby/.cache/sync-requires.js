const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/404.js"))),
  "component---src-pages-first-page-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/FirstPage.js"))),
  "component---src-pages-fourth-page-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/FourthPage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/index.js"))),
  "component---src-pages-second-page-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/SecondPage.js"))),
  "component---src-pages-storypage-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/Storypage.js"))),
  "component---src-pages-third-page-js": hot(preferDefault(require("/Users/moinahmed/Desktop/starter-files/gatsby/src/pages/ThirdPage.js")))
}

