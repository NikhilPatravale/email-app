import { Box, List, Drawer, Fab, Stack } from '@mui/material'
import { SidebarOptions } from '../../constants/constants'
import { SidebarOption, SidebarDisplayChange } from '../../redux/actions/action'
import { setFeedHeader, setNewMessage } from '../../redux/actions/FeedActions'
import React from 'react'
import { connect } from 'react-redux'
import SidebarItem from './SidebarItem'
import SidebarDrawer from './SidebarDrawer'
import { Add } from '@mui/icons-material'

function Sidebar(props) {
  const { changeOption,
    setFeedHeading,
    isSidebarClose,
    selected,
    closeSidebar,
    setNewMessage } = props

  const optionChangeHandler = (value) => {
    changeOption(value)
    setFeedHeading(value)
  }

  return (
    <>
      <Stack sx={{ flex: 1, position: 'relative', display: { xxxs: 'none', md: "flex", justifyContent:'space-between', minHeight: '598px'} }}>
        <List disablePadding>
          {
            SidebarOptions.map((item, indx) => (
              <SidebarItem
                key={indx}
                selected={selected === item}
                option={item}
                optionChangeHandler={optionChangeHandler}
                type='normal'
              />
            ))
          }
        </List>
        <Box sx={{ display: { xxs: 'none', md: 'block', margin: 'auto', marginBottom:'20px'} }}>
          <Fab color="primary" onClick={() => setNewMessage('new')}>
            <Add />
          </Fab>
        </Box>
      </Stack>
      <SidebarDrawer
        isSidebarClose={isSidebarClose}
        closeSidebar={closeSidebar}
        selected={selected}
        optionChangeHandler={optionChangeHandler}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  selected: state.sidebar.selectedOption,
  isSidebarClose: state.sidebar.isSidebarClose
})

const mapDispatchToProps = (dispatch) => ({
  changeOption: (value) => dispatch(SidebarOption(value)),
  setFeedHeading: (value) => dispatch(setFeedHeader(value)),
  closeSidebar: value => dispatch(SidebarDisplayChange(value)),
  setNewMessage: value => dispatch(setNewMessage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
