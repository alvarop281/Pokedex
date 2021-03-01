import { PokeInfo } from './models/PokeInfo';
import { Pokemon } from './models/Pokemon';


export interface AppState{
    readonly device: boolean;
    readonly pokeList: PokeInfo[];
    readonly pokeSelected: Pokemon;
}