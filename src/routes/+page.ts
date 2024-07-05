import type { Food } from '../interfaces/Food.interface';
import type { MicroNutrient } from '../interfaces/MicroNutrient.interface';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const [nutrientsRequest, foodsRequest] = await Promise.all([
		fetch('data/nutrients.json'),
		fetch('data/foods.json')
	]);

	const [nutrients, foods]: [Array<MicroNutrient>, Array<Food>] = await Promise.all([
		nutrientsRequest.json(),
		foodsRequest.json()
	]);
	const grouppedNutrients = nutrients.reduce(
		(acc, nutrient) => {
			if (!acc[nutrient.type]) {
				acc[nutrient.type] = [];
			}
			acc[nutrient.type].push(nutrient);
			return acc;
		},
		{} as Record<string, MicroNutrient[]>
	);

	return {
		nutrients: grouppedNutrients,
		foods: foods.sort((a, b) => a.name.localeCompare(b.name))
	};
}) satisfies PageLoad;
