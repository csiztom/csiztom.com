<script>
	import '../app.css'
	import 'css.gg/icons/icons.css'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	inject({ mode: dev ? 'development' : 'production' })
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>
