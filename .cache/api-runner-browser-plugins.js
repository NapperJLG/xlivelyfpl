module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/jakenapper/Documents/xlivelyfpl"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1200}}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/jakenapper/Documents/xlivelyfpl"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
