import * as PSActions from '../actions/pokeSelected';

const initialState: string = '';

export function PokeSelectedReducer( state: string = initialState, action: PSActions.Actions ) {
    switch( action.type ){
        case PSActions.ADD_POKEMON: 
            return state = action.payload;
        default:
            return state;
    }
}