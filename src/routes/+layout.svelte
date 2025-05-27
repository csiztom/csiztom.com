<script lang="ts">
	import '../app.css'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import LocaleSelector from '$lib/components/LocaleSelector.svelte'
	inject({ mode: dev ? 'development' : 'production' })
</script>

<div class="app">
	<main>
		<LocaleSelector />
		<slot />
	</main>
</div>
