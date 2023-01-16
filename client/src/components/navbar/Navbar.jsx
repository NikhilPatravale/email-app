import { MailLock, Menu } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NavIconsGroup from '../styledcomps/NavIconsGroup'
import SearchBar from '../styledcomps/SearchBar'
import {SidebarDisplayChange} from '../../redux/actions/action'
import { connect } from 'react-redux'

function Navbar(props) {
    const {isSidebarClose, closeSidebar} = props
    
    return (
        <AppBar position='sticky' color='primary' sx={{height: '50px', justifyContent: 'center'}}>
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <IconButton color='inherit' sx={{display:{xxs: 'block', md:'none'}}} onClick={() => closeSidebar(!isSidebarClose)}>
                        <Menu />
                    </IconButton>
                    <Typography component="h6" sx={{ display: { xxxs: 'none', sm: 'block' } }}>E-Mail App</Typography>
                    <IconButton color='inherit' sx={{ display: { xxxs: 'none', xxs:'block', sm: 'none' } }}>
                        <MailLock />
                    </IconButton>
                </Stack>
                <SearchBar />
                <NavIconsGroup />
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Avatar alt="" src="" />
                    {/* <Typography component="h4" sx={{ display: { xs: 'block', sm: 'none' } }}>Nikhil Patravale</Typography> */}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => ({
    isSidebarClose: state.sidebar.isSidebarClose
})

const mapDispatchToProps = (dispatch) => ({
    closeSidebar: (value) => dispatch(SidebarDisplayChange(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


