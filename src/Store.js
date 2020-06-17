import React, { createContext, useReducer } from 'react';
import io from 'socket.io-client';
import chatReducer from './reducers/chatReducer';
export const Context = createContext();

const initialState = {
    Bitcoin: [{ from: 'Admin', msg: 'Welcome to Bitcoin!' }],
    Ethereum: [{ from: 'Admin', msg: 'Welcome to Ethereum!' }],
    Litecoin: [{ from: 'Admin', msg: 'Welcome to Litecoin!' }],
    Ripple: [{ from: 'Admin', msg: 'Welcome to Ripple!' }],
    Dogecoin: [{ from: 'Admin', msg: 'Welcome to Dogecoin!' }],
};

let socket;
const user = 'liam' + Math.random(100).toFixed(2);

const sendChatAction = (value) => {
    socket.emit('chat message', value);
};

const Store = (props) => {
    const [allChatrooms, dispatch] = useReducer(chatReducer, initialState);

    if (!socket) {
        socket = io(':5000');
    } else {
        socket.on('chat message', (msg) => {
            console.log({ msg });
            dispatch({ type: 'RECEIVE_MSG', payload: msg });
        });
    }

    return (
        <Context.Provider value={{ allChatrooms, sendChatAction, user }}>
            {props.children}
        </Context.Provider>
    );
};

export default Store;
