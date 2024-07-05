<script lang="ts">
	import type { MicroNutrient } from '../interfaces/MicroNutrient.interface';
	import type { SelectedFood } from '../interfaces/SelectedFood.interface';
	export let nutrient: MicroNutrient;
	export let selectedFoods: Array<SelectedFood> = [];

	let amount = 0;
	$: amount = Math.round(
		selectedFoods.reduce(
			(acc, curr) => acc + (curr.food.nutrients[nutrient.name] ?? 0) * curr.serving,
			0
		)
	);
	let unit = 'μg';
	$: if (amount > 1000) {
		amount /= 1000;
		unit = 'mg';
	}
	$: percent = Math.round((amount / nutrient.rda) * 100);
</script>

<div>
	<a href={nutrient.wiki} target="_blank">{nutrient.name}: {amount} {unit} / {percent}%</a>
</div>
