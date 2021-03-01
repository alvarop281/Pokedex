import { Action } from '@ngrx/store';

export const SET_POKEMON = '[POKEMON] Add';

export class SetPokemon implements Action {
    readonly type = SET_POKEMON;

    constructor( public payload: string ) {}
}

export type Actions = SetPokemon;