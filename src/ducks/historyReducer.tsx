import { AnyAction } from 'redux'

interface HistoryState {
    history: Array<string>
}

// Initial State
const initialHistoryState: HistoryState = {
    history: [],
}

// Reducer
export default function historyReducer(state: HistoryState = initialHistoryState, action: AnyAction) {
    switch (action.type) {
        case ADD_HISTORY_ENTRY: {
            const newHistory = state.history;
            const newEntry = action.payload.toLowerCase();
            if(!newHistory.includes(newEntry)){
                newHistory.unshift(newEntry)
            }
            return {
                history: [ ...newHistory ],
            }
        }
    default:
       return state
    }
}

// Action Types
const ADD_HISTORY_ENTRY = "ADD_HISTORY_ENTRY"

type AddHistoryEvent = {
    type: typeof ADD_HISTORY_ENTRY;
    payload: string;
}
// Actions
const addHistoryEntry = (entry: string): AddHistoryEvent => ({
    type: ADD_HISTORY_ENTRY,
    payload: entry
})

export { addHistoryEntry }
