export const parameters = {
	layout: 'centered',
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		},
	},
	options: {
		storySort: {
			order: ['Getting Started', 'Pages', 'Components']
		}
	}
};

