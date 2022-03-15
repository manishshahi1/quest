---
title: this is some title of the latest nft launch
tags:
  + hello
  + yahoo
blockchain: Polygon
launchDate: 14-03-2022
lauchEndDate: 20-03-2022
summary: this is awesome summary of the event launch
publishDate: 14-03-2022
website: https://www.nft91.club
twitter: https://twitter.com/abc
discord: https://discord.gg/aaa
verified: ok
slug: this-is-happening
isHot: ok
launchRange: 14-20 March
publishDate2: 14 March, 2022
Marketplace: Opensea
MarketplaceUrl: https://opensea.io/
aniImage: https://nftcalendar.io/storage/uploads/events/2022/3/tCYRuPfLxc91LxpuEc7xJ1YmuKPVWH0fAa9NpXGD.gif
---
<script>

    import Leaderboard from '$lib/advertisement/Leaderboard.svelte';

</script>

<div class="container-fluid check-pattern text-center" style="height:50% !important">

    <div class="row">
    	<div class="col-12">
    		<h5 class="p mt-5 text-muted">{publishDate2}</h5>
    		<h1 class="mt-2 fw-bold heading">{title}</h1>
    	</div>
    </div>

</div>

<Leaderboard/>
<div class="container-fluid my-4">

    <div class="row">
        <div class="col-12 col-xl-3 col-xxl-3">

<!-- card -->
<div class="card border border-dark">
  <img src={aniImage} class="card-img-top" alt="...">
  <ul class="list-group list-group-flush p">

    <li class="list-group-item">Blockchain:  <span class="float-end">{blockchain}</span></li>
    <li class="list-group-item">Website: <span class="float-end"><a href={website}>{website}</a></span>

    <li class="list-group-item">Twitter: <span class="float-end"><a href={twitter}>{twitter}</a> <br> 1.3k Followers</span></li>
    <li class="list-group-item">Discord: <span class="float-end"><a href={discord}>{discord}</a> <br> 1.3k Followers</span></li>

    <li class="list-group-item">Marketplace:  <span class="float-end">{Marketplace} <a href={MarketplaceUrl}> <i class="bi bi-box-arrow-up-right"></i></a></span></li>

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

sidebar

        </div>
    </div>

</div>

<Leaderboard/>
