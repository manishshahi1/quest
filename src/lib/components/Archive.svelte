<script>
	let Calendar = [
		['Jan', 'January'],
		['Feb', 'February'],
		['Mar', 'March'],
		['Apr', 'April'],
		['May', 'May'],
		['Jun', 'June'],
		['Jul', 'July'],
		['Aug', 'August'],
		['Sep', 'September'],
		['Oct', 'October'],
		['Nov', 'November'],
		['Dec', 'December']
	];
	// current month
	var m_names = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let d = new Date();
	let n = m_names[d.getMonth()];
</script>

<div class="card border border-primary border-1 mt-3">
	<div class="card-header border-bottom-0 mono">
		<i class="bi bi-collection" /> <b class="text-primary"> Archive</b>
	</div>
	<div class="card-body p">
		<p class="card-text">Select a month to checkout past, upcoming or ongoing NFT launches.</p>
		<select name="archiveYear" class="form-select form-select-lg mb-2" id="archiveYear">
			<option value="1">2022</option>
		</select>
		<select name="archiveMonth" class="form-select form-select-lg mb-2" id="archiveMonth">
			<option selected>{n}</option>
			<option disabled>Please Select</option>
			{#each Calendar as [option, month]}
				<option value={option}>{month}</option>
			{/each}
		</select>
		<p class="d-grid">
			<button class="btn btn-primary btn-lg mono btn-block" type="button" id="button-addon2"
				>Fetch</button
			>
		</p>
		<hr />
		<p>NFT Launches in {n} <span class="badge bg-primary float-end">New</span></p>
		<ul class="card-text">
			<li>
				<a href="/events/" class="link-dark">SkullCandy NFT</a>
			</li>
		</ul>
	</div>
</div>
