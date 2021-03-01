import { PokeInfo } from './models/PokeInfo';

export interface AppState{
    readonly device: boolean;
    readonly pokeList: PokeInfo[];
    readonly pokeSelected: string;
}