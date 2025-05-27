<script lang="ts">
	import { locale, locales } from '$lib/utils/i18n'
</script>

<div class="absolute top-0 right-5">
	<div class="p-2 rounded-b-2xl gap-2 dropdown dropdown-end">
		<div role="button" tabindex="0" class="btn btn-square mb-1">{$locale}</div>
		<ul class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
			{#each locales as l (l)}
				{#if l !== $locale}
					<li>
						<button tabindex="0" on:click={() => ($locale = l)}>{l}</button>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
