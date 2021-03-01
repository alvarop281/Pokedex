import { Action } from '@ngrx/store';

export const ADD_POKEMON = '[POKEMON] Add';

export class AddPokemon implements Action{
    readonly type = ADD_POKEMON;

    constructor( public payload: string ) {}
}

export type Actions = AddPokemon;