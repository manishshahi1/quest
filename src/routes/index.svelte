<script context="module">
	const allPosts = import.meta.glob('./calendar/event/*.md');
	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	};
</script>

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
	//load latest post
	export let posts;
	console.table(posts);
	//today's date
	const twoDigits = (numb) => {
		return numb.toString().padStart(2, '0');
	};
	const formatDate = (date) => {
		return [twoDigits(date.getDate()), twoDigits(date.getMonth() + 1), date.getFullYear()].join(
			'-'
		);
	};
	let today = formatDate(new Date());
</script>

<div
	class="{width < 992 ? 'container' : 'container-fluid'} check-pattern text-center"
	style="height:50% !important"
>
	<div class="row">
		<div class="col-12">
			<h1 class="mt-5 heading">Upcoming NFT & NFT Drop</h1>
			<h2 class="p fs-6">
				Upcoming NFT, NFT Drop, New NFT, NFT Calendar, Best NFT, Buy NFT, NFT Blog, NFT News, Bored
				NFT, Art NFT, Opensea, Rarity Tools updates all in one spot.
			</h2>
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
					class="btn btn-outline-dark bg-gradient me-3 border border-1 border-dark"
					href="//twitter.com/intent/follow?screen_name=scribbbblr"
					><i class="bi bi-twitter" /> Twitter</a
				>
				<span />
				<a
					class="btn btn-outline-dark bg-gradient me-3 border border-1 border-dark"
					href="//twitter.com/intent/follow?screen_name=scribbbblr"
					><i class="bi bi-youtube" /> Youtube</a
				>
				<span />
				<a
					class="btn btn-outline-dark bg-gradient border border-1 border-dark"
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
					<a class="nav-link active" aria-current="page" href="/"
						><i class="bi bi-calendar-event" /> today</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/calendar/upcoming-nft"
						><i class="bi bi-calendar3" /> upcoming</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/calendar/ongoing-nft"
						><i class="bi bi-calendar-check" /> ongoing</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/calendar/new-nft"><i class="bi bi-calendar-plus" /> new</a>
				</li>
			</ul>
			<h2 class="my-3 p">Today's NFT Launches</h2>
			<hr class="border border-1 mb-4" />
			<!-- blog post -->
			<div class="row">
				{#each posts as { path, metadata: { title, publishDate, summary, aniImage, launchDate, launchRange, launchEndDate, website, discord, twitter, verified, slug } }}
					{#if today === launchDate}
						<div class="col-12 col-xl-4 col-xxl-4">
							<div class="card border border-1 border-dark">
								<img src={aniImage} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title h4 mono fw-bold">{title}</h5>
									<p class="text-muted small">
										Added on: {publishDate}
									</p>
									<p class="card-text">
										{summary}
									</p>
									<p class="text-muted small">Launch: {launchRange}</p>

									<p class="small">
										{#if verified === 'not'}
											<span class="text-danger "
												><i class="bi bi-x-circle-fill" /> Unverified Listing</span
											>
										{:else}
											<span class="text-success "
												><i class="bi bi-check-circle-fill" /> Verified Listing</span
											>
										{/if}
									</p>
									<div
										class="btn-group  btn-group-lg d-flex"
										role="group"
										aria-label="Basic outlined example"
									>
										<a href={website} class="btn btn-outline-primary"><i class="bi bi-globe" /></a>
										<a href={twitter} type="button" class="btn btn-outline-primary"
											><i class="bi bi-twitter" /></a
										>
										<a href={discord} type="button" class="btn btn-outline-primary"
											><i class="bi bi-discord" /></a
										>
									</div>
								</div>
								<div class="card-footer border-top-0">
									<a
										href={path.replace('.md', '')}
										class="btn btn-outline-dark d-grid bg-gradient btn-block btn-lg mb-2 mono small mt-2 fs-6"
									>
										Read More</a
									>
									<div class="dropup">
										<button
											class="btn btn-dark btn-lg btn-block w-100 dropdown-toggle mb-2 mono fs-6"
											type="button"
											id="dropdownMenuButton2"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Add to Calendar <i class="bi bi-chevron-up" />
										</button>
										<ul
											class="dropdown-menu mb-1 w-100 bg-gradient dropdown-menu-dark"
											aria-labelledby="dropdownMenuButton2"
										>
											<li>
												<a class="dropdown-item" href="!#"
													><i class="bi bi-google" /> <span class="ms-2"> Google Calendar</span></a
												>
											</li>
											<li>
												<a class="dropdown-item" href="!#"
													><i class="bi bi-apple" /> <span class="ms-2"> Apple Calendar</span></a
												>
											</li>
											<li>
												<a class="dropdown-item" href="!#">
													<img src="/yahoo.png" width="17px" alt="Yahoo Calendar" />
													<span class="ms-2"> Yahoo Calendar</span></a
												>
											</li>
											<li>
												<a class="dropdown-item" href="!#">
													<img src="/outlook.png" width="17px" alt="Yahoo Calendar" />
													<span class="ms-2"> Outlook Calendar</span></a
												>
											</li>
											<li>
												<a class="dropdown-item" href="!#">
													<i class="bi bi-calendar" />
													<span class="ms-2"> iCal Calendar</span></a
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
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

<style>
	.dropdown-toggle::after {
		display: none !important;
	}
</style>
