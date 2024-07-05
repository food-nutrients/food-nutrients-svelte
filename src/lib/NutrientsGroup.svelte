<script lang="ts">
	import type { MicroNutrient } from '../interfaces/MicroNutrient.interface';
	import type { SelectedFood } from '../interfaces/SelectedFood.interface';
	import Nutrient from './Nutrient.svelte';
	export let groupName: string;
	export let nutrients: Array<MicroNutrient>;
	export let selectedFoods: Array<SelectedFood> = [];
</script>

<div>
	<h1>{groupName}</h1>
	{#each nutrients as nutrient}
		<Nutrient {nutrient} {selectedFoods} />
	{/each}
</div>

<style>
	h1 {
		margin: 0;
		font-size: 1.5rem;
	}
</style>
