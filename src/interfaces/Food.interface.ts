import type { MicroNutrient } from './MicroNutrient.interface';

export interface Food {
	name: string;
	usda_id?: string;
	fat: number;
	calories: number;
	proteins: number;
	carbohydrates: number;
	serving: number;
	nutrients: Record<MicroNutrient['name'], number>;
}
