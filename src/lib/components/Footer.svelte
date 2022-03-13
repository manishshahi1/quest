<script>
	let links = [
		['/about', 'about'],
		['/contact', 'contact'],
		['/sitemap', 'sitemap'],
		['/promote', 'promote'],
		['/privacy', 'privacy']
	];
	let sns = [
		['<i class="bi bi-twitter"></i>', '//twitter.com/upcomingnftquest', 'Twitter'],
		['<i class="bi bi-youtube"></i>', '//twitter.com/upcomingnftquest', 'Youtube'],
		['<i class="bi bi-telegram"></i>', '//t.me/upcomingnftquest', 'Telegram']
	];
</script>

<div
	class="container-fluid bg-gradient bg-primary text-center text-light my-3 p-3"
	style="height:50% !important"
>
	<div class="row">
		<div class="col-12 col-xl-6 col-xxl-6">
			<h1 class="mt-3 heading">Email Newsletter</h1>
			<p class="lead text-info">Sign up for our email newsletter to stay up to date.</p>
		</div>
		<div class="col-12 col-xl-6 col-xxl-6">
			<p class="lead text-info float-start">No spam ever. Unsubscribe at any time.</p>
			<div class="input-group my-4">
				<input
					type="text"
					class="form-control form-control-lg mono"
					placeholder="Enter your email"
					aria-label="Enter your email"
					aria-describedby="button-addon2"
				/>
				<button class="btn btn-warning btn-lg mono" type="button" id="button-addon2"
					><i class="bi bi-send" /></button
				>
			</div>
		</div>
	</div>
</div>

<div class="container my-3 text-center">
	<div class="row">
		<div class="col-12">
			<div class="card border-1 border-primary border mb-3">
				<div class="card-header heading float-start border-bottom-0 fw-bold">
					<i class="bi bi-exclamation-triangle" /> <span class="text-primary">Disclaimer</span>
				</div>
				<div class="card-body">
					<p class=" card-text">
						A listing charge is paid to UpcomingNFT.Quest for listing and ranking NFT collections.
						NFT holders or creators typically pay listing fees. UpcomingNFT.Quest is exclusively for
						educational and informational purposes. We do not offer financial or investing advice,
						nor do we advocate that you buy any NFT. Please do not rely on the postings or other
						material on this site for purchasing, selling, or any other purpose.
					</p>
				</div>
			</div>
			<ul class="list-inline">
				{#each links as [href, name]}
					<li class="list-inline-item text-decoration-none">
						<a class="link-dark mono  me-2 text-decoration-none" {href}>{name}</a>
					</li>
				{/each}
			</ul>
			<ul class="list-inline my-4">
				{#each sns as [icon, link, msg]}
					<li class="list-inline-item text-decoration-none">
						<a
							class="link-dark bg-gradient btn btn-sm btn-outline-dark text-decoration-none sns p me-3  border border-1 border-dark"
							href={link}>{@html icon} {msg}</a
						>
					</li>
				{/each}
			</ul>
			<p class="text-center mono">&copy; 2022 UpcomingNFT&bullet;Quest. All rights reserved.</p>
		</div>
	</div>
</div>

<style>
	.sns:hover {
		color: #fff;
	}
</style>
