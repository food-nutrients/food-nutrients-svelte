<script lang="ts">
	import type { SelectedFood } from '../interfaces/SelectedFood.interface';

	export let selectedFoods: Array<SelectedFood>;

	$: calories = selectedFoods.reduce((acc, curr) => acc + curr.food.calories * curr.serving, 0);
	$: proteins =
		selectedFoods.reduce((acc, curr) => acc + curr.food.proteins * curr.serving, 0) / 1000000;
	$: carbs =
		selectedFoods.reduce((acc, curr) => acc + curr.food.carbohydrates * curr.serving, 0) / 1000000;
	$: fats = selectedFoods.reduce((acc, curr) => acc + curr.food.fat * curr.serving, 0) / 1000000;
</script>

<div class="macro-nutrients">
	<div>
		<h1>Calories</h1>
		{calories} kcal
	</div>
	<div>
		<h1>Proteins</h1>
		{proteins}
	</div>
	<div>
		<h1>Carbs</h1>
		{carbs}
	</div>
	<div>
		<h1>Fats</h1>
		{fats}
	</div>
</div>

<style>
	.macro-nutrients {
		display: flex;
		justify-content: space-around;
	}
	.macro-nutrients div {
		text-align: center;
	}
</style>
