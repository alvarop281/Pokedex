import { Action } from '@ngrx/store'
import * as PSAction from '..//actions/pokeSelected.actions';

const initialState: string = '1';

export function PokeSelectedReducer( state: string = initialState, action: PSAction.Actions ) {
    switch( action.type ){
        case PSAction.SET_POKEMON:
            return state = action.payload;
        default:
            return state;
    }
} 