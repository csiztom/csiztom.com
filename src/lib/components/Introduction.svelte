<script lang="ts">
	import { t } from '$lib/utils/i18n'
</script>

<div class="grid grid-cols-2 h-full">
	<div class="flex justify-center items-center shrink-0">
		<div class="h-fit">
			<h1 class="text-9xl">
				{$t('intro.hello')}<br />{$t('intro.iam', { name: 'Tamás' })}
			</h1>
		</div>
	</div>
	<div class="flex justify-center items-center p-24 shrink-0">
		<p class="text-4xl">{$t('intro.desc')}</p>
	</div>
</div>
