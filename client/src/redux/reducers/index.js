import { combineReducers } from "redux"
import { messagesReducer } from "./MessagesReducer"
import { feedReducer } from "./FeedReducer"
import { sidebarReducer } from "./SidebarReducer"
import { userContextReducer } from "./UsercontextReducer"

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    feed: feedReducer,
    messages: messagesReducer,
    userContext: userContextReducer,
})