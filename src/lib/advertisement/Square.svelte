<script>
	export let imgSrc;
	export let href;
	export let msg;
	export let linkMsg;
</script>

<div class="card border border-primary border-1 mt-3">
	<div class="card-header border-bottom-0 mono">
		<i class="bi bi-megaphone" /> <b class="rainbow text-primary">Promotion</b>
	</div>
	<div class="card-body p">
		<p class="p">{msg}</p>
		<div class="card-text my-3 square rounded border mx-auto text-center border-dark border-1">
			<h3 class="mt-5">{imgSrc}</h3>
			<p class="lead">250x250</p>
		</div>
		<p class="card-text d-grid">
			<a {href} class="btn btn-lg btn-outline-primary">{linkMsg}</a>
		</p>
	</div>
</div>

<style>
	.rainbow {
		animation: zoom-in-zoom-out 1s ease infinite;
	}

	@keyframes zoom-in-zoom-out {
		0% {
			transform: scale(1, 1);
		}
		50% {
			transform: scale(1.5, 1.5);
		}
		100% {
			transform: scale(1, 1);
		}
	}
	.square {
		width: 250px;
		height: 250px;
	}
</style>
