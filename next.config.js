const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require("@zeit/next-bundle-analyzer")
const preact = require('@zeit/next-preact')
const { getExperimentsList } = require('./helpers/experiment')

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
], {
  async exportPathMap() {
    if (process.env.NODE_ENV !== 'production') return {}
    await require('./export-api')
    const { posts: postsList } = require('./out/api/posts')
    const experimentsList = await getExperimentsList()

    const experiments = experimentsList.reduce((acc, experiment) => (
      {
        ...acc,
        [`/experiment/${experiment.slug}`]: {
          page: `/experiment/${experiment.slug}`,
          query: { ...experiment, build: true }
        }
      }
    ), {})

    const posts = postsList.reduce((pages, data) => {
      const post = require(`./out/api/post/${data.slug}`)

      return {
        ...pages,
        [`/${data.slug}`]: {
          page: '/post',
          query: { ...post, build: true }
        }
      }
    }, {})

    const pages = {
      '/': {
        page: '/',
        query: { build: true }
      },
      '/blog': {
        page: '/blog',
        query: { posts: postsList, build: true }
      },
      '/photography': {
        page: '/photography',
        query: { build: true }
      },
      '/experiments': {
        page: '/experiments',
        query: { experiments: experimentsList, build: true }
      },
      '/about': {
        page: '/about',
        query: { build: true }
      }
    }

    // combine the map of post pages with landing pages
    return {
      ...experiments,
      ...posts,
      ...pages
    }
  }
})
