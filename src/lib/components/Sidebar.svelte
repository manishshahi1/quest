<script>
	import Square from '$lib/advertisement/Square.svelte';
	import Archive from '$lib/components/Archive.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import Blockchain from '$lib/components/Blockchain.svelte';
	let ad = {
		imgSrc: 'your NFT here',
		href: '/promote',
		msg: 'Launching your NFT? Promote it with us.',
		imgAlt: 'Promote your NFT',
		linkMsg: 'Learn More'
	};
</script>

<div class="card border border-primary border-1">
	<div class="card-header border-bottom-0 mono">
		<i class="bi bi-envelope-paper-heart" /> <b class="text-primary"> Email Newsletter </b>
	</div>
	<div class="card-body p">
		<img
			src="/plane.png"
			alt="Email Newsletter"
			class="img-fluid d-block mx-auto mb-2 w-75"
			style="z-index:-9999 !important;"
		/>
		<p class="card-text">Get tutorials, guides, and dev jobs in your inbox.</p>
		<div class="input-group mt-2">
			<input
				type="text"
				class="form-control form-control-lg mono"
				placeholder="Enter your email"
				aria-label="Enter your email"
				aria-describedby="button-addon2"
			/>
			<button class="btn btn-primary btn-lg mono" type="button" id="button-addon2"
				><i class="bi bi-send" /></button
			>
		</div>
		<p class="small card-text">No spam ever. Unsubscribe at any time.</p>
	</div>
</div>
<!-- ad -->
<Square {...ad} />
<!-- ad end -->
<!-- blockchain -->
<Blockchain />
<!-- blockchain end -->
<!-- tags -->
<Tags />
<!-- tags end -->
<!-- archive -->
<Archive />
<!-- archive end -->
<!-- ad -->
<Square {...ad} />
<!-- ad end -->
