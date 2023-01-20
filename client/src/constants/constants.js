export const SidebarConstants = {
    INBOX: 'inbox',
    DRAFTS: 'drafts',
    SENT: 'sent',
    DELETED: 'deleted',
    SPAM: 'spam'
}

export const Actions = {
    SIDEBAR_OPTION_CHANGE: 'SIDEBAR_OPTION_CHANGE',
    FEED_HEADER_CHANGE: 'FEED_HEADER_CHANGE',
    SELECTED_MESSAGE_CHANGE: 'SELECTED_MESSAGE_CHANGE',
    SIDEBAR_DISPLAY_CHANGE: 'SIDEBAR_DISPLAY_CHANGE',
    SET_NEW_MESSAGE: 'SET_NEW_MESSAGE',
    SET_DEFAULT_NEW_MESSAGE: "SET_DEFAULT_NEW_MESSAGE"
}

export const FeedConstants = {
    Inbox: 'Inbox',
    Drafts: 'Drafts',
    Sent: 'Sent',
    Deleted: 'Deleted',
    Spam: 'Spam'
}

export const SidebarOptions = ['Inbox', 'Sent', 'Drafts', 'Deleted', 'Spam']

export const BASE_URL = "http://localhost:8200/email/api/"