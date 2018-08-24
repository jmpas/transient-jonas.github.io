const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require("@zeit/next-bundle-analyzer")
const preact = require('@zeit/next-preact')

module.exports = withPlugins([
	[bundleAnalyzer, {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
		}
	}],
	preact
])
