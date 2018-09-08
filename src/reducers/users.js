import { List } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return List.of(...state, { id: state.size + 1, name: action.name, email: action.email })
        case 'REMOVE_USER':
            return List(state).filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}