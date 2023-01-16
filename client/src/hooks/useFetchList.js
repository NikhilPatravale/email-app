import { useEffect, useState } from "react";
import { FeedConstants } from "../constants/constants";

export default function useFetchList(option, messages){
    const [inboxList, setInboxList] = useState([])

    useEffect(() => {
        if(option === FeedConstants.Inbox){
          setInboxList(messages.messages.inbox)
        } else if(option === FeedConstants.Sent){
          setInboxList(messages.messages.sent)
        } else if(option === FeedConstants.Drafts){
          setInboxList(messages.messages.drafts)
        } else if(option === FeedConstants.Deleted){
          setInboxList(messages.messages.deleted)
        } else if(option === FeedConstants.Spam){
          setInboxList(messages.messages.spam)
        }
      }, [option, messages])

    return inboxList
}