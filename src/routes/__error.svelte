<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: `${status}`,
				title: `${error.message}`
			}
		};
	}
</script>

<script>
	export let status;
	export let title;
</script>

<div
	class="container-fluid check-pattern border border-2 text-center"
	style="height:50% !important"
>
	<div class="row">
		<div class="col-12">
			<h1 class="fw-bold mt-5 heading">{status} Error</h1>
			<h4 class="p">{title}</h4>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12">
			<p><b>Popular Pages</b></p>
		</div>
	</div>
</div>
