<style>
</style>

<script>
	import Introduction from '$lib/components/Introduction.svelte'
	import Section from '$lib/components/Section.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Personal website" />
</svelte:head>

<div class="snap-mandatory snap-y overflow-auto h-screen w-full">
	<Section>
		<Introduction />
	</Section>
	<Section>
		<Introduction />
	</Section>
</div>
