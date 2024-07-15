<script>
	import { current_month } from "./month_stores";
</script>

<header>
	<div id="head_bar">
		<input value={$current_month} class="text-center" />
	</div>
</header>

<style>
	input {
		color: white;
		font-size: 2rem;
	}
	#head_bar {
		width: 100%;
		height: 3rem;
		background-color: black;
	}
</style>
