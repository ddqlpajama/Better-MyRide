<script lang="ts">
	import { PUBLIC_GOOGLE_API_KEY } from '$env/static/public';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let latitude = $state(data.lat);
	let longitude = $state(data.lon);
	let iframeSrc = $derived(
		`https://www.google.com/maps/embed/v1/view?key=${PUBLIC_GOOGLE_API_KEY}&center=${latitude},${longitude}&zoom=14`
	); // Initial empty map src
	let errorMessage = '';
</script>

<div class="flex h-screen flex-col md:flex-row">
	<div class="relative flex-grow">
		<iframe
			width="100%"
			height="100%"
			frameborder="0"
			style="border:0"
			referrerpolicy="no-referrer-when-downgrade"
			src={iframeSrc}
			allowfullscreen
			title="Google Maps"
		></iframe>
	</div>
</div>
