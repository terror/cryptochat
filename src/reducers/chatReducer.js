export default function chatReducer(state, action) {
    const { from, msg, topic } = action.payload;
    switch (action.type) {
        case 'RECEIVE_MSG':
            return {
                ...state,
                [topic]: [...state[topic], { from, msg }],
            };
        default:
            return state;
    }
}
