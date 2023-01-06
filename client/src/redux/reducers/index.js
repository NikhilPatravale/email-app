import { combineReducers } from "redux"
import { feedReducer } from "./FeedReducer"
import { sidebarReducer } from "./SidebarReducer"

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    feed: feedReducer
})