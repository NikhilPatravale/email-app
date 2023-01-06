import { Avatar, Divider, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setSelectedMessage } from '../../redux/actions/FeedActions'
import DummyData from '../../static/dummy.json'


function Feed(props) {
  const { heading, feeds, setSelectedMessage } = props

  return (
    <Stack sx={{ flex: 2, paddingLeft: '5px' }}>
      <Typography variant='h6'>{heading?.slice(0, 1).toUpperCase() + heading?.slice(1)}</Typography>
      <List disablePadding sx={{ overflowY: 'scroll' }}>
        {
          feeds.map((item, indx) => {
            return <>
              <ListItemButton sx={{ padding: 0 }} >
                <ListItem disablePadding sx={{ cursor: 'pointer', paddingRight: '5px' }} onClick={() => setSelectedMessage(item)}>
                  <ListItemAvatar>
                    <Avatar alt="" src="" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant='subtitle1' fontWeight={500}>
                        {item.subject}
                      </Typography>
                    }
                    secondary={
                      <Typography variant='body2' sx={{ maxHeight: 40, overflow: 'hidden', fontWeight: 100 }}>
                        {item.body}
                      </Typography>
                    } />
                </ListItem>
              </ListItemButton>
              {indx !== DummyData.length - 1 ? <Divider /> : null}
            </>
          })
        }
      </List>
    </Stack>
  )
}

const mapStateToProps = (state) => ({
  heading: state.feed.header,
  feeds: state.feed.list
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedMessage: (message) => dispatch(setSelectedMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
