import { Card, Type, Subtype } from '../../../models/card/card.model'



export const mock: Card = {
  "id": "pl1-1",
  "name": "Ampharos",
  "supertype": "Pokémon",
  "subtypes": ["Stage 2"],
  "level": "57",
  "hp": "130",
  "types": [Type.Lightning],
  "evolvesFrom": "Flaaffy",
  "abilities": [{
    "name": "Damage Bind",
    "text": "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
    "type": Type.Lightning
  }],

  "weaknesses": [{
    "type": "Fighting",
    "value": "+30"
  }],
  "resistances": [{
    "type": "Metal",
    "value": "-20"
  }],
  "convertedRetreatCost": 2,

  "number": 1,
  "artist": "Atsuko Nishida",
  "rarity": "Rare Holo",
  "nationalPokedexNumbers": [181],
  "images": {
    "small": "https://images.pokemontcg.io/pl1/1.png",
    "large": "https://images.pokemontcg.io/pl1/1_hires.png"
  },
  "tcgplayer": {
    "url": "https://prices.pokemontcg.io/tcgplayer/pl1-1",
    "updatedAt": "2021/03/17",
    "prices": {
      "holofoil": {
        "low": 5.68,
        "mid": 6.75,
        "high": 8.99,
        "market": 3.56,
        "directLow": null
      },
      "reverseHolofoil": {
        "low": 5.58,
        "mid": 9.79,
        "high": 15.0,
        "market": 2.16,
        "directLow": null
      }
    }
  },
  loading: true
}
