//  In some cases, singular nouns ending in -s or -z, need double the -s or -z prior to adding the -es for pluralization.
const doubleTheS = {
	fez: 'fezzes',
	gas: 'gasses',
};

//  If the noun ends with ‑f or ‑fe, the f is often changed to ‑ve before adding the -s to form the plural version.
// but these are exceptions

const endsWithF = {
	roof: 'roofs',
	belief: 'beliefs',
	chef: 'chefs',
	chief: 'chiefs',
};

const endsWithO = {
	photo: 'photos',
	piano: 'pianos',
	halo: 'halos',
};

const unchangeNoun = {
	sheep: 'sheep',
	series: 'series',
	species: 'species',
	deer: 'deer',
	fish: 'fish',
};

const irregularNoun = {
	child: 'children',
	goose: 'geese',
	man: 'men',
	woman: 'women',
	tooth: 'teeth',
	foot: 'feet',
	mouse: 'mice',
	person: 'people',
};

const dictionary = Object.assign(
	{},
	doubleTheS,
	endsWithF,
	endsWithO,
	unchangeNoun,
	irregularNoun
);

export default dictionary;
