<script>
	import Greeting from './Greeting.svelte';
	export let name;

	let ExtComponent;
	let pass2Greeting = `This is passed to greeting module js file`;

	let ComponentIndex = [
		`http://localhost:3000/components/Greetings.mjs`,
		`./Greeting.svelte`
	];

	const loadExternal = () => {
		import(ComponentIndex[0]).then( resp => {
			console.log(resp);
			ExtComponent = resp.default;
		})
		// import(`./Greeting.svelte`).then( resp => {
		// 	console.log(resp);
		// 	ExtComponent = resp.default;
		// })
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<button on:click={loadExternal}>Press this to release Awesomeness</button>
<svelte:component this={ExtComponent} name={pass2Greeting}/>