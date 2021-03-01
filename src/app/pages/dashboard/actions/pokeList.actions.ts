import { Action } from '@ngrx/store';

import { PokeInfo } from '../../../models/PokeInfo';

export const ADD_POKELIST = '[POKELIST] Add';

export class AddPokeList implements Action{
    readonly type = ADD_POKELIST;

    constructor( public payload: PokeInfo ) {}
}

export type Actions = AddPokeList;