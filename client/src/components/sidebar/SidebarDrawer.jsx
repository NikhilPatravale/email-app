import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { SidebarOptions } from '../../constants/constants'
import SidebarItem from './SidebarItem'

export default function SidebarDrawer(props) {
    
    const {isSidebarClose, closeSidebar, selected, optionChangeHandler} = props

    return (
        <Drawer
            container={() => window.document.body}
            variant='temporary'
            open={!isSidebarClose}
            onClose={() => closeSidebar(true)}
            ModalProps={{
                keepMounted: true
            }}
        >
            <List sx={{ padding: '20px 10px 0 10px' }}>
                {
                    SidebarOptions.map((item, indx) => (
                        <SidebarItem
                            key={indx}
                            selected={selected === item}
                            option={item}
                            optionChangeHandler={optionChangeHandler}
                            type='drawer'
                            closeSidebar={closeSidebar}
                        />
                    ))
                }
            </List>
            <Divider />
            <List sx={{paddingLeft: 2}}>
                <ListItemButton >
                    <ListItemText primary="Messages" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </List>
        </Drawer>
    )
}
