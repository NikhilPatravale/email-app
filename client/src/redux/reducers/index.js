import { combineReducers } from "redux"
import { messagesReducer } from "./MessagesReducer"
import { feedReducer } from "./FeedReducer"
import { sidebarReducer } from "./SidebarReducer"

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    feed: feedReducer,
    messages: messagesReducer
})