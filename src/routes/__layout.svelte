<script context="module">
	export async function load() {
		const allPosts = import.meta.glob('/src/routes/calendar/event/*');
		// console.table(allPosts);
		let body = [];
		for (let path in allPosts) {
			body.push(
				allPosts[path]().then(({ metadata }) => {
					return { path, metadata };
				})
			);
		}
		let posts = await Promise.all(body);
		// console.table(posts);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';

	//trim slashes from url
	export let posts;
</script>

<Navbar />
<SearchModal />

<slot><!-- optional fallback --></slot>

<Footer {posts} />
