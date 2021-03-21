export interface CardResponse {
  data: Card
}
export interface Card {
  id?: string;
  name?: string;
  supertype?: string;
  subtypes?: Array<Subtype | string>;
  level?: string;
  hp?: string;
  types?: Array<Type>;
  evolvesFrom?: string;
  abilities?: Array<Abilitie>;
  attacks?: Array<Attack>;
  weaknesses?: Array<weakness>;
  resistances?: Array<resistance>;
  retreatCost?: Array<Type>;
  convertedRetreatCost?: number;
  number?: number;
  artist?: string;
  rarity?: string;
  nationalPokedexNumbers?: Array<number>;
  legalities?: SetLegality;
  set?: Set;
  images: CardImage;
  tcgplayer?: Tcgplayer,
  loading?: boolean;
}

export interface Abilitie {
  name?: string;
  text?: string;
  type?: Type;
}

export interface Attack {
  name?: string;
  cost?: string;
  convertedEnergyCost?: number;
  damage?: string;
  text?: string;
}

export interface weakness {
  type?: string;
  value?: string;
}

export interface resistance {
  type?: string;
  value?: string;
}

export interface Set {
  id?: string;
  name?: string;
  series?: string;
  printedTotal?: number;
  total?: number;
  legalities?: SetLegality;
  images?: SetImage;
  ptcgoCode?: string;
  releaseDate?: string;
  updatedAt?: string;


}

export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}


export interface SetImage {
  symbol?: string;
  logo?: string;
}

export interface SetLegality {
  expanded?: Legality | undefined
  standard?: Legality | undefined
  unlimited?: Legality | undefined
}

export interface CardImage {
  small?: string;
  large?: string;
}

export interface Tcgplayer {
  url?: string;
  updatedAt?: string;
  prices?: {
    normal?: Price | undefined;
    holofoil?: Price | undefined;
    reverseHolofoil?: Price | undefined;
  }
}

export interface Price {
  low?: number | null
  mid?: number | null
  high?: number | null
  market?: number | null
  directLow?: number | null
}

export enum Type {
  "Colorless",
  "Darkness",
  "Dragon",
  "Fairy",
  "Fighting",
  "Fire",
  "Grass",
  "Lightning",
  "Metal",
  "Psychic",
  "Water"
}

export enum Subtype {
  "BREAK",
  "Baby",
  "Basic",
  "EX",
  "GX",
  "Goldenrod Game Corner",
  "Item",
  "LEGEND",
  "Level-Up",
  "MEGA",
  "Pokémon Tool",
  "Pokémon Tool F",
  "Restored",
  "Rocket's Secret Machine",
  "Special",
  "Stadium",
  "Stage 1",
  "Stage 2",
  "Supporter",
  "TAG TEAM",
  "Technical Machine",
  "V",
  "VMAX"
}
