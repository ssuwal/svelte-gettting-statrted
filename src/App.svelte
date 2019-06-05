<script>
	export let name;

	let ExtComponent;

	const loadExternal = () => {
		import(`http://localhost:3000/components/Greetings.mjs`).then( resp => {
			console.log(resp);
			ExtComponent = resp/* .default */;
		})
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<button on:click={loadExternal}>Press this to release Awesomeness</button>
<svelte:component this={ExtComponent} />