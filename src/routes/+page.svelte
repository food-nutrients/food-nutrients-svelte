<script lang="ts">
	import FoodSelector from '../lib/FoodSelector.svelte';
	import FoodList from '../lib/FoodList.svelte';
	import MacroNutrients from '$lib/MacroNutrients.svelte';
	import NutrientsGroup from '$lib/NutrientsGroup.svelte';
	import type { Food } from '../interfaces/Food.interface';
	import type { SelectedFood } from '../interfaces/SelectedFood.interface';
	import type { PageData } from './$types';
	export let data: PageData;

	let selectedFoods: Array<SelectedFood> = [];
	const onSelect = (event: Event) => {
		const select = event.target as HTMLSelectElement;
		if (Array.isArray(selectedFoods) && typeof select.value === 'string') {
			const food = data.foods.find((f) => f.name === select.value);
			if (!food) return;
			selectedFoods = [
				...selectedFoods,
				{
					food,
					serving: food.serving
				}
			];
		}
	};

	const onDelete = (food: Food) => {
		selectedFoods = selectedFoods.filter((f) => f.food.name !== food.name);
	};
</script>

<div class="main">
	<div class="selected-foods">
		<img src="/logo.png" alt="logo" />
		<FoodSelector foods={data.foods} {onSelect} />
		<FoodList {selectedFoods} {onDelete} />
	</div>
	<div class="data-panel">
		<div class="macro-nutrients">
			<MacroNutrients {selectedFoods} />
		</div>
		<div class="nutrients-groups flex">
			{#each Object.keys(data.nutrients) as nutrientType}
				<NutrientsGroup
					groupName={nutrientType}
					nutrients={data.nutrients[nutrientType]}
					{selectedFoods}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		justify-content: stretch;
		padding: 1rem;
	}
	.selected-foods {
		padding: 1rem;
		width: 400px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	.data-panel {
		flex: 1;
		padding: 1rem;
	}
	.macro-nutrients {
		margin-bottom: 1rem;
	}
	.nutrients-groups {
		display: flex;
		justify-content: space-between;
	}
</style>
