<script>
	import { browser } from '$app/env';
	var w = 1024;
	if (browser) {
		w = screen.width;
	}
	$: width = w;
</script>

<div
	class="{width < 992
		? 'leaderboard-sm'
		: 'leaderboard-lg'} border border-1 border-primary mx-auto rounded"
>
	<h3 class="mt-2 text-center">
		your NFT here <small>{width < 992 ? '320x50' : '728x90'}</small>
	</h3>
</div>

<style>
	.leaderboard-lg {
		width: 728px;
		height: 90px;
		background: #fff;
	}

	.leaderboard-sm {
		width: 320px;
		height: 50px;
		background: #fff;
	}
</style>
