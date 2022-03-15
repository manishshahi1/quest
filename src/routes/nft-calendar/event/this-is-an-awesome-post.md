---
title: this is some title of the latest nft launch
tags:
  + hello
  + yahoo
blockchain: Polygon
launchDate: 15-03-2022
launchEndDate: 20-03-2022
summary: this is awesome summary of the event launch
publishDate: 14-03-2022
website: https://www.nft91.club
twitter: https://twitter.com/abc
discord: https://discord.gg/aaa
verified: ok
slug: this-is-happening
isHot: ok
launchRange: 14-20 March, 2022
publishDate2: 14 March, 2022
Year: 2022
Marketplace: Opensea
MarketplaceUrl: https://opensea.io/
aniImage: https://nftcalendar.io/storage/uploads/events/2022/3/tCYRuPfLxc91LxpuEc7xJ1YmuKPVWH0fAa9NpXGD.gif
---
<script>
  

	import SvelteSeo from 'svelte-seo';

    import Leaderboard from '$lib/advertisement/Leaderboard.svelte';

</script>

<SvelteSeo title={title} description="A short description goes here." />
<div class="container-fluid check-pattern text-center" style="height:50% !important">

    <div class="row">
    	<div class="col-12">
    		<h5 class="p mt-5 text-muted">{publishDate2}</h5>
    		<h1 class="mt-2 fw-bold heading">{title}</h1>
    	</div>
    </div>

</div>

<Leaderboard/>

<div class="container-fluid my-2">

    <div class="row">
    <div class="col-12">
    <nav aria-label="breadcrumb" class="my-2">
				<ol class="breadcrumb  text-nowrap overflow-auto">
					<li class="breadcrumb-item  mono">
						<i class="bi bi-house" /> <a href="/" class="link-dark"> Home</a>
					</li>
					<li class="breadcrumb-item  mono"><a href="/nft-calendar" class="link-dark"> NFT Calendar</a></li>
					<li class="breadcrumb-item  mono"><a href="/event" class="link-dark"> Event</a></li>
					<li class="breadcrumb-item active  mono" aria-current="page">{title}</li>
				</ol>
			</nav>
      </div>
        <div class="col-12 col-xl-3 col-xxl-3">

<!-- card -->
<div class="card border border-dark mb-3">
  <img src={aniImage} class="card-img-top" alt="...">
  <ul class="list-group list-group-flush p">

    <li class="list-group-item"><b>Blockchain</b>  :  <span class="float-end small">{blockchain}</span></li>
    <li class="list-group-item"><b>Website</b> : <span class="float-end small"><a target="_blank" href={website}>{website}</a></span>

    <li class="list-group-item"><b>Twitter</b> : <span class="float-end small"><a target="_blank" href={twitter}>{twitter}</a> <br> 1.3k Followers</span></li>
    <li class="list-group-item"><b>Discord</b> : <span class="float-end small"><a target="_blank" href={discord}>{discord}</a> <br> 1.3k Followers</span></li>

    <li class="list-group-item"><b>Marketplace</b> :  <span class="float-end small">{Marketplace} <a target="_blank" href={MarketplaceUrl}> <i class="bi bi-box-arrow-up-right"></i></a></span></li>

  </ul>
</div>
<!-- end -->

        </div>
        <div class="col-12 col-xl-6 col-xxl-6">

**bold**
this is some paragram

hello

        </div>
        
        <div class="col-12 col-xl-3 col-xxl-3">

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

        </div>
    </div>

</div>

<Leaderboard/>
