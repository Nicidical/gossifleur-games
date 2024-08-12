export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
  delibird: {
		inherit: true,
		otherFormes: ["Delibird-Mega"],
    formeOrder: ["Delibird", "Delibird-Mega"],
  },
  delibirdmega: {
		num: 225,
		name: "Delibird-Mega",
		baseSpecies: "Delibird",
		forme: "Mega",
		types: ["Ice", "Flying"],
		baseStats: {hp: 45, atk: 105, def: 45, spa: 65, spd: 45, spe: 125},
		abilities: {0: "Huge Power"},
		heightm: 0.9,
		weightkg: 16,
		color: "Red",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Delibirdite",
	},
	breloom: {
		inherit: true,
		otherFormes: ["Breloom-Mega"],
    formeOrder: ["Breloom", "Breloom-Mega"],
  },
	breloommega: {
		num: 286,
		name: "Breloom-Mega",
		baseSpecies: "Breloom",
		forme: "Mega",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 60, atk: 150, def: 120, spa: 50, spd: 110, spe: 60},
		abilities: {0: "Technician"}, // Place holder until Fungal Touch is implemented
		heightm: 1.2,
		weightkg: 39.2,
		color: "Green",
		eggGroups: ["Fairy", "Grass"],
		requiredItem: "Breloomite",
	}
}
