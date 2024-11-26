interface FilterItem {
  type: string;
  amount: number;
}

// Explicitly type the arrays as FilterItem[]
export const carTypesData: FilterItem[] = [
  { type: "Sport", amount: 10 },
  { type: "SUV", amount: 12 },
  { type: "MPV", amount: 16 },
  { type: "Sedan", amount: 20 },
  { type: "Coupe", amount: 14 },
  { type: "Hatchback", amount: 14 },
];

export const capacityData: FilterItem[] = [
  { type: "2 Person", amount: 10 },
  { type: "4 Person", amount: 14 },
  { type: "6 Person", amount: 12 },
  { type: "8 or More", amount: 16 },
];
