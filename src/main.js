import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Crazy World Crazy Name'
	}
});

export default app;