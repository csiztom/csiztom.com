<script lang="ts">
	import { locale, locales } from '$lib/utils/i18n'
</script>

<div class="absolute top-0 right-5 group">
	<div
		class="p-2 glass-effect rounded-b-2xl flex flex-col justify-center items-center gap-2"
	>
		<button class="btn btn-square mb-1" disabled>{$locale}</button>
		{#each locales as l (l)}
			{#if l !== $locale}
				<button
					class="btn btn-square group-hover:block hidden"
					on:click={() => ($locale = l)}>{l}</button
				>
			{/if}
		{/each}
	</div>
</div>
