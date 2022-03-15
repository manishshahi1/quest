<script>
	import { browser } from '$app/env';
	var w = 1024;
	if (browser) {
		w = screen.width;
	}
	$: width = w;
</script>

<div
	class="offcanvas offcanvas-end shadow-lg {width < 992 ? 'w-75' : 'w-50'} border-0"
	tabindex="-1"
	id="SearchModal"
	aria-labelledby="SearchModalLabel"
>
	<div class="offcanvas-header py-2 bg-primary bg-gradient text-light">
		<h5 class="offcanvas-title mono fs-6 fw-bold" id="SearchModalLabel">
			<i class="bi bi-search" /> Search Website
		</h5>
		<button
			type="button"
			class="btn-close text-light"
			style="color:#fff !important;"
			data-bs-dismiss="offcanvas"
			aria-label="Close"
		/>
	</div>
	<div class="offcanvas-body">
		<p>Looking for something specific? Use the search bar below to find it.</p>
		{width}
	</div>
</div>
