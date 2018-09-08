const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

export function addUser(name, email) {
    return {
        type: ADD_USER,
        name,
        email
    };
}

export function removeUser(id) {
    return {
        type: REMOVE_USER,
        id
    };
}