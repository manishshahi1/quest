<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Button from '$lib/advertisement/Button.svelte';
	import Skyscrapper from '$lib/advertisement/Skyscrapper.svelte';
	import Leaderboard from '$lib/advertisement/Leaderboard.svelte';
	import { browser } from '$app/env';
	var w = 1024;
	if (browser) {
		w = screen.width;
	}
	$: width = w;
</script>

<div
	class="{width < 992 ? 'container' : 'container-fluid'} check-pattern text-center"
	style="height:50% !important"
>
	<div class="row">
		<div class="col-12">
			<h1 class="mt-5 heading">Upcoming NFT & NFT Drops</h1>
			<h2 class="p">Upcoming NFT, NFT Drops, NFT Calendar, Best NFT, NFT News in one place.</h2>
		</div>
	</div>
</div>
<div class="container-fluid">
	<div class="row">
		<div class="col-12 mb-3">
			<Leaderboard />
		</div>
		<Button />
		<div class="col-12 text-center my-2">
			<p class=" mb-2">
				<a
					class="btn btn-outline-primary bg-gradient me-2"
					href="//twitter.com/intent/follow?screen_name=scribbbblr"
					><i class="bi bi-twitter" /> Twitter</a
				>
				<span />
				<a
					class="btn btn-outline-primary bg-gradient me-2"
					href="//twitter.com/intent/follow?screen_name=scribbbblr"
					><i class="bi bi-youtube" /> Youtube</a
				>
				<span />
				<a
					class="btn btn-outline-primary bg-gradient"
					href="//twitter.com/intent/follow?screen_name=scribbbblr"
					><i class="bi bi-telegram" /> Telegram</a
				>
			</p>
		</div>
		<div class="col-xl-2 col-xxl-2  d-none d-xl-block">
			<Skyscrapper /><Skyscrapper /><Skyscrapper />
		</div>
		<div class="col-12 col-xl-7 col-xxl-7  mb-3">
			<ul class="nav nav-pills nav-fill flex-nowrap">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/events/"
						><i class="bi bi-calendar-event" /> today</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/events/"><i class="bi bi-calendar3" /> upcoming</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/events/"><i class="bi bi-calendar-check" /> ongoing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/events/"><i class="bi bi-calendar-plus" /> new</a>
				</li>
			</ul>
			<h2 class="my-3 p">Today's NFT Launches</h2>
			<!-- blog post -->
			<div class="row">
				<div class="col-12 col-xl-4 col-xxl-4">
					<div class="card shadow border border-2 border-dark">
						<img
							src="https://nftcalendar.io/storage/uploads/events/2022/2/0uK0m7TF1Swb3Dmk12UHrEImFknjhM2wiIp847d7.gif"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title mono fw-bold">Card title</h5>
							<p class="text-muted small">Added on: 14 Mar 2022</p>
							<p class="card-text">
								Some quick example text to build on the card title and make up the bulk of the
								card's content.
							</p>
							<p class="text-muted small">Launch Date: 07 - 27 Mar</p>
							<p class="text-muted small">Launch Time: 22:50 GMT</p>
							<div
								class="btn-group  btn-group-lg d-flex"
								role="group"
								aria-label="Basic outlined example"
							>
								<button type="button" class="btn btn-outline-primary"
									><i class="bi bi-globe" /></button
								>
								<button type="button" class="btn btn-outline-primary"
									><i class="bi bi-twitter" /></button
								>
								<button type="button" class="btn btn-outline-primary"
									><i class="bi bi-discord" /></button
								>
							</div>
						</div>
						<div class="card-footer border-top-0">
							<a
								href="/events/upcoming-nft/"
								class="btn btn-outline-dark d-grid btn-block btn-lg mb-2 mono small mt-2"
							>
								Read More</a
							>
							<a
								href="/events/upcoming-nft/"
								class="btn btn-dark d-grid btn-block btn-lg mono small mb-2">Add to Calendar</a
							>
						</div>
					</div>
				</div>
				<!-- dont delete below -->
			</div>

			<!-- end -->
		</div>
		<!-- 1st row -->
		<div class="col-12 col-xl-3 col-xxl-3">
			<Sidebar />
		</div>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col-12 mt-4">
			<Leaderboard />
		</div>
	</div>
</div>
