import React from 'react'
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Inbox, Send, Drafts, Delete, ErrorOutline  } from '@mui/icons-material'
import { SidebarOptions } from '../../constants/constants'


export default function SidebarItem(props) {
    const {selected, optionChangeHandler, option, type, closeSidebar} = props

    const handleOptionChange = () => {
        optionChangeHandler(option)
        if(type === 'drawer'){
            closeSidebar(true)
        }
    }

    return (
        <ListItem disablePadding selected={selected}>
            <ListItemButton onClick={handleOptionChange}>
                <ListItemIcon>
                    {option === SidebarOptions[0] ? <Inbox/> : 
                    option === SidebarOptions[1] ? <Send /> :
                    option === SidebarOptions[2] ? <Drafts /> :
                    option === SidebarOptions[3] ? <Delete /> : 
                    <ErrorOutline/>}
                </ListItemIcon>
                <ListItemText>{option}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}
