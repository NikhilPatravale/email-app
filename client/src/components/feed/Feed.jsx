import { Avatar, Divider, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setNewMessage, setSelectedMessage } from '../../redux/actions/FeedActions'
import DummyData from '../../static/dummy.json'
import useFetchList from '../../hooks/useFetchList'
import { Drafts } from '@mui/icons-material'


function Feed(props) {
  const { heading, setNewMessage, setSelectedMessage, messages, sidebar } = props
  const { selectedOption } = sidebar

  const list = useFetchList(selectedOption, messages)

  const handleMessageSelect = (value) => {
    if (selectedOption === 'Drafts') {
      setNewMessage({
        type: "draft",
        defaultMessage: value
      })
    } else {
      setNewMessage({
        type: "",
        defaultMessage: null
      })
      setSelectedMessage(value)
    }
  }

  return (
    <Stack sx={{ flex: '2 0 20%', maxWidth:{xxxs: '100%', sm:'40%', md: '36%'}, paddingLeft: '5px', minHeight: '510px' }}>
      <Typography variant='h6'>{heading?.slice(0, 1).toUpperCase() + heading?.slice(1)}</Typography>
      <List disablePadding sx={{ overflowY: 'auto' }}>
        {
          list?.map((item, indx) => {
            return <Box key={indx}>
              <ListItemButton sx={{ padding: 0 }} >
                <ListItem disablePadding sx={{ cursor: 'pointer', paddingRight: '5px' }} onClick={() => handleMessageSelect(item)}>
                  <ListItemAvatar>
                    <Avatar alt="" src="" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant='subtitle1' fontWeight={500}>
                        {
                          selectedOption === "Drafts" ?
                            item.subject ? item.subject : '(no subject)' : item.subject
                        }
                      </Typography>
                    }
                    secondary={
                      <>
                        {selectedOption === "Drafts" ? <Stack direction='row' gap={1} alignItems='center'>
                          <Typography variant='body1' component='span' color='red' sx={{ fontSize: '12px' }}>[Draft]</Typography>
                          <Drafts fontSize='14px' color="action" />
                        </Stack> : null}
                        <Typography variant='body2' sx={{ height: "40px", overflow: 'hidden', fontWeight: 100}}>
                          <div className="dangerouslySetHTML" style={{margin:0}} dangerouslySetInnerHTML={{__html: item.body}}></div>
                        </Typography>
                      </>
                    } />
                </ListItem>
              </ListItemButton>
              {indx !== DummyData.length - 1 ? <Divider /> : null}
            </Box>
          })
        }
      </List>
    </Stack>
  )
}

const mapStateToProps = (state) => ({
  heading: state.feed.header,
  feeds: state.feed.list,
  messages: state.messages,
  sidebar: state.sidebar
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedMessage: message => dispatch(setSelectedMessage(message)),
  setNewMessage: value => dispatch(setNewMessage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
