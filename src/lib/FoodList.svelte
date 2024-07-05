<script lang="ts">
	import type { Food } from '../interfaces/Food.interface';
	import type { SelectedFood } from '../interfaces/SelectedFood.interface';

	export let selectedFoods: Array<SelectedFood> = [];
	export let onDelete: (food: Food) => void;
</script>

<ul>
	{#each selectedFoods as food}
		<li>
			<div class="food-name">{food.food.name}</div>
			<div class="food-props">
				<input type="number" value={food.serving} min="0" step="1" />grams
				<button
					on:click={() => {
						onDelete(food.food);
					}}>x</button
				>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin-top: 1rem;
	}
	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	input {
		border: 1px solid #ccc;
		border-radius: 6px;
		width: 100px;
		text-align: center;
		-webkit-appearance: none;
		-moz-appearance: textfield;
		padding: 0.5rem;
		margin-right: 1rem;
	}

	.food-props {
		flex-grow: 1;
		border-radius: 5;
		text-align: right;
	}
	button {
		margin-left: 1rem;
	}
</style>
