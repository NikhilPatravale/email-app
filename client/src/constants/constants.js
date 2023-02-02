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
    SET_DEFAULT_NEW_MESSAGE: 'SET_DEFAULT_NEW_MESSAGE',
    ADD_DRAFT_MESSAGE: 'ADD_DRAFT_MESSAGE',
    ADD_SENT_MESSAGE: 'ADD_SENT_MESSAGE',
    ADD_INBOX_MESSAGE: 'ADD_INBOX_MESSAGE',
    ADD_DELETED_MESSAGE: 'ADD_DELETED_MESSAGE',
    SET_SAVE_AS_DRAFT: 'SET_SAVE_AS_DRAFT',
    SET_IS_FORWARD: 'SET_IS_FORWARD',
    SET_SNACK_OPEN: 'SET_SNACK_OPEN',
}

export const FeedConstants = {
    Inbox: 'Inbox',
    Drafts: 'Drafts',
    Sent: 'Sent',
    Deleted: 'Deleted',
    Spam: 'Spam'
}

export const SidebarOptions = ['Inbox', 'Sent', 'Drafts', 'Deleted', 'Spam']

export const MessageOptions = ['Attach File', 'Mark as unread', 'Delete message']

export const SnackMessages = {
    sent: 'Message Sent',
    deleted: 'Message Deleted'
}

export const SnackType = {
    success: 'success',
    warning: 'warning'
}

export const BASE_URL = "http://localhost:8200/email/api/"