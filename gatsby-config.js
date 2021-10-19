module.exports = {
	siteMetadata: {
		title: `xLively FPL`,
		author: {
			name: `Jake Napper`,
			summary: `FPL addict creating a place to collect his thoughts`
		},
		description: `The musings of an FPL addict`,
		siteUrl: 'https://localhost:8000',
		social: {
			twitter: `xlivelyfpl`
		}
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.md`, `.mdx`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto`
				],
				display: 'swap'
			}
		},
		`gatsby-plugin-sass`
	]
}
