<script lang="ts">
	import type { Food } from '../interfaces/Food.interface';

	export let foods: Array<Food>;
	export let onSelect: (event: Event) => void;
</script>

<select placeholder="Select food" on:change={onSelect}>
	<option disabled selected value> + Add Food </option>
	{#each foods as food}
		<option value={food.name}>{food.name}</option>
	{/each}
</select>

<style>
	select {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
	}
</style>
