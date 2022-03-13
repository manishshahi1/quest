<script>
	import About from '$lib/_docs/About.md';
	import { browser } from '$app/env';
	var w = 1024;
	if (browser) {
		w = screen.width;
	}
	$: width = w;
</script>

<div class="container-fluid check-pattern text-center" style="height:50% !important">
	<div class="row">
		<div class="col-12">
			<h1 class="mt-5 heading">About Us</h1>
			<h2 class="p">Learn more about us.</h2>
		</div>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col-12">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item  mono">
						<i class="bi bi-house" /> <a href="/" class="link-dark"> Home</a>
					</li>
					<li class="breadcrumb-item active  mono" aria-current="page">About</li>
				</ol>
			</nav>
		</div>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col-12 col-xl-8 col-xxl-8">
			<About />
			<p>To donate, please click on the button below.</p>
			<p>
				<a
					data-bs-toggle="modal"
					data-bs-target="#donateModal"
					class="btn btn-lg btn-primary bg-gradient"
					href="!#"><i class="bi bi-heart-fill" /> Donate</a
				>
			</p>
		</div>
		<div class="col-12 col-xl-4 col-xxl-4">
			<div
				class="container h-50	 mt-5 dots d-none d-xl-block"
				style="margin-left:75px !important;"
			/>
			<div class="testimonial {width < 992 ? 'mt-sm' : 'mt-lg'}">
				<h3 class="title">
					Manish
					<span class="post">- Founder, UpcomingNFT&bullet;Quest</span>
				</h3>
				<p class="description">
					We are committed to bring best NFT collection from around the globe.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: 'Share Tech Mono', monospace !important;
	}
	.dots {
		background: radial-gradient(circle, #d9d7fc 10%, transparent 11%),
			radial-gradient(circle at bottom left, #d9d7fc 5%, transparent 6%),
			radial-gradient(circle at bottom right, #d9d7fc 5%, transparent 6%),
			radial-gradient(circle at top left, #d9d7fc 5%, transparent 6%),
			radial-gradient(circle at top right, #d9d7fc 5%, transparent 6%);
		background-size: 3em 3em;
		background-color: #f9f9ff;
		opacity: 0.45;
	}
	/* testimonial */
	.mt-sm {
		margin-top: 80px !important;
	}
	.mt-lg {
		margin-top: -280px !important;
	}
	.testimonial {
		border: 10px solid #662a66;
		padding: 40px 0 25px 0;
		text-align: center;
		margin: 25px;
		position: relative;
		margin-bottom: 70px;
		z-index: 1000;
		background: #fff;
	}
	.testimonial:before {
		content: '❝';
		font-family: 'Montagu Slab', serif;
		width: 100px;
		height: 100px;
		line-height: 150px;
		background: #fff;
		margin: 0 auto;
		font-size: 100px;
		font-weight: 900;
		color: #0d6efd;
		position: absolute;
		top: -60px;
		left: 0;
		right: 0;
	}
	.testimonial .title {
		padding: 7px 0;
		margin: 0 -30px 20px;
		border: 7px solid #fff;
		background: #e8326f;
		font-size: 18px;
		font-weight: 700;
		color: #fff;
		letter-spacing: 1px;
		text-transform: uppercase;
		position: relative;
	}
	.testimonial .title:before {
		content: '';
		border-top: 15px solid #662a66;
		border-left: 15px solid transparent;
		border-bottom: 15px solid transparent;
		position: absolute;
		bottom: -37px;
		left: 0;
	}
	.testimonial .title:after {
		content: '';
		border-top: 15px solid #662a66;
		border-right: 15px solid transparent;
		border-bottom: 15px solid transparent;
		position: absolute;
		bottom: -37px;
		right: 0;
	}
	.testimonial .post {
		display: inline-block;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		text-transform: capitalize;
	}
	.testimonial .description {
		padding: 0 20px;
		margin: 0;
		font-size: 15px;
		color: #6f6f6f;
		letter-spacing: 1px;
		line-height: 30px;
	}
</style>
