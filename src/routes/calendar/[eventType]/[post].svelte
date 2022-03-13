<script>
	import { page } from '$app/stores';
	import Loadable from 'svelte-loadable';

	//get current post name
	const pageName = $page.url.pathname;
	const postUrl = pageName.split('/');
	var lastSegment = postUrl.pop() || postUrl.pop(); // handle potential trailing slash
</script>

{#await import(`../../posts/${lastSegment}.md`) then value}
	<svelte:component this={value.default} />
{/await}

<Loadable loader={() => import(`../../posts/${lastSegment}.md`)} />

{lastSegment}
