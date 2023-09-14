<script lang="ts">
	import FullWidth from './FullWidth.svelte'

	export let type: string
	const components: { type: string; component: any }[] = [
		{ type: 'full-width', component: FullWidth },
		// future components
	]
</script>

<section>
	<svelte:component
		this={components.find(component => type === component.type)?.component}
	/>
</section>
