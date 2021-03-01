import { PokeInfo } from '../../../models/PokeInfo';

import * as PLActions from '../actions/pokeList.actions';

const initialState: PokeInfo[] = [];

export function PokeListReducer( state: PokeInfo[] = initialState, action: PLActions.Actions ) {
    switch( action.type ){
        case PLActions.ADD_POKELIST: 
            return [...state, action.payload];
        default:
            return state;
    }
}