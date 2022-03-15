<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
</script>

<Navbar />
<SearchModal />

<slot><!-- optional fallback --></slot>

<Footer />
