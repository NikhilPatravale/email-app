import { Add } from '@mui/icons-material'
import { Box, Button, Divider, Drawer, Fab, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { SidebarOptions } from '../../constants/constants'
import SidebarItem from './SidebarItem'

export default function SidebarDrawer(props) {

    const { isSidebarClose, closeSidebar, selected, optionChangeHandler, setNewMessage } = props

    const handleNewMessage = () => {
        setNewMessage({ type: "new", defaultMessage: null })
        closeSidebar(true)
    }

    return (
        <Drawer
            container={() => window.document.body}
            variant='temporary'
            open={!isSidebarClose}
            onClose={() => closeSidebar(true)}
            ModalProps={{
                keepMounted: true
            }}
            sx={{width: '200px'}}
        >
            <List sx={{ width: '200', padding: '20px 10px 0 10px' }}>
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
            <List sx={{ paddingLeft: 2 }}>
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
            <Divider />
            <Box margin='0 auto' marginTop={8}>
                <Fab color="primary"
                onClick={handleNewMessage}
                >
                    <Add />
                </Fab>
            </Box>
        </Drawer>
    )
}
