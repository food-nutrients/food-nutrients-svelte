export interface MicroNutrient {
	name: number;
	rda: number;
	wiki: string;
	required: boolean;
	type: 'Vitamins' | 'Minerals' | 'Essential Fatty Acids' | 'Essential Fatty Acids';
	tui: number;
}
