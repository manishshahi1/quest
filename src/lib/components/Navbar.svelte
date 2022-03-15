<script>
	import { page } from '$app/stores';
	let links = [
		['/', '<i class="bi bi-house-fill"></i> home'],
		['/about', '<i class="bi bi-info-circle-fill"></i> about'],
		['/contact', '<i class="bi bi-envelope-fill"></i> contact'],
		['/news', '<i class="bi bi-newspaper"></i> news'],
		['/blog', '<i class="bi bi-journal-bookmark-fill"></i> blog'],
		['/question-and-answer', '<i class="bi bi-patch-question-fill"></i> QnA']
	];
	//current
	$: currentRoute = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient py-1">
	<div class="container-fluid">
		<a class="navbar-brand text-white heading fs-6 fw-bold" href="/"
			>UpcomingNFT&bullet;Quest<sup>β</sup></a
		>
		<button
			data-bs-toggle="offcanvas"
			href="#SearchModal"
			class="float-end btn btn-transparent text-light d-block d-xl-none"
			aria-controls="SearchModal"
		>
			<i class="bi bi-search float-end" />
		</button>
		<button
			data-bs-toggle="modal"
			href="#donateModal"
			class="float-end btn btn-transparent text-light d-block d-xl-none"
			aria-controls="SearchModal"
		>
			<i class="bi bi-heart float-end" />
		</button>
		<button
			class="navbar-toggler border-0 no-active"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
				{#each links as [href, link]}
					<li class="nav-item">
						<a class="nav-link me-3 {currentRoute === href ? 'active' : ''}" {href}>{@html link}</a>
					</li>
				{/each}
				<li class="nav-item">
					<a
						data-bs-toggle="modal"
						data-bs-target="#donateModal"
						class="nav-link me-3 {currentRoute === '!#' ? 'active' : ''}"
						href="!#"><i class="bi bi-heart-fill" /> donate</a
					>
				</li>
			</ul>
			<div class="d-flex">
				<a
					class="me-4  btn btn-transparent text-light d-none d-xl-block"
					data-bs-toggle="offcanvas"
					href="#SearchModal"
					role="button"
					aria-controls="SearchModal"
				>
					<i class="bi bi-search h6" /></a
				>
				<a href="/promote" class="btn btn-outline-light mono rounded-0" type="submit"
					><i class="bi bi-plus-circle" /> Submit NFT Project</a
				>
			</div>
		</div>
	</div>
</nav>
<!-- donate -->
<!-- Modal -->
<div
	class="modal shadow-lg fade"
	id="donateModal"
	tabindex="-1"
	aria-labelledby="donateModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content border border-primary border-1">
			<div class="modal-header bg-light bg-gradient border-bottom-0">
				<h5 class="modal-title mono" id="donateModalLabel">
					<i class="bi bi-heart-fill" /> <span class="text-primary">Donate</span>
				</h5>
				<button
					type="button"
					class="btn-close text-primary"
					data-bs-dismiss="modal"
					aria-label="Close"
				/>
			</div>
			<div class="modal-body">...</div>
		</div>
	</div>
</div>

<style>
	.no-active:focus,
	.no-active {
		outline: none !important;
		box-shadow: none !important;
	}
</style>
