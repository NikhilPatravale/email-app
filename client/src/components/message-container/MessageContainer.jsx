import { Box, Paper, Card, CardHeader, CardContent, Avatar, IconButton, Stack, Typography, Menu, MenuItem } from '@mui/material'
import { Reply, ReplyAll, Forward, MoreVert, Email } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewMessage from '../newMessage/NewMessage'
import moment from 'moment'
import { useState } from 'react'
import { setNewMessage, setSelectedMessage } from '../../redux/actions/FeedActions'
import { Actions, MessageOptions, SnackMessages, SnackType } from '../../constants/constants'
import { addNewMessage, setSnackOpen } from '../../redux/actions/MessageAction'
import { deleteMessage } from '../../redux/actions/ApiActions'

function MessageContainer(props) {
  const { message, newMessage, setNewMessage, 
          addNewMessage, sidebarOption, deleteMessage, setSelectedMessage, setSnackOpen } = props
  const [messageDate, setMessageDate] = useState("")
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [anchor, setAnchor] = useState(null)

  const handleClick = (e) => {
    setOptionsOpen(!optionsOpen)
    if (anchor) {
      return setAnchor(null)
    } else setAnchor(e.currentTarget)
  }

  const handleOptionClick = (i) => {
    switch (i) {
      case 0:
        return
      case 1:
        return
      case 2:
        deleteMessage(message?._id).then((res) => {
          setSelectedMessage(null)
          addNewMessage({
            type: Actions.ADD_DELETED_MESSAGE,
            message: res,
            from: sidebarOption?.toLowerCase()
          })
          setSnackOpen({
            open: true,
            message: SnackMessages.deleted,
            type: SnackType.warning
        })
        })
    }
  }

  useEffect(() => {
    if (message) {
      let date = moment(message.updatedAt).format('ddd, DD-MMM-YYYY, hh:mm A')
      setMessageDate(date)
    }
  }, [message])

  const handleFoward = () => {
    // setForward(true)
    setNewMessage({
      type: 'forward',
      defaultMessage: message
    })
  }

  return (
    <Box className='messageContainer' sx={{ flex: '3', minHeight: '490px', display: { xxxs: 'none', sm: 'flex' }, alignSelf: 'start', padding: "10px 10px 10px 15px" }}>
      {
        newMessage?.type ? <NewMessage /> :
          message ? <Card sx={{ height: '471px', width: '100%', padding: 1 }}>
            <Typography variant='h6' sx={{ paddingLeft: 1, fontWeight: 550 }}>{message.subject}</Typography>
            <CardHeader
              avatar={
                <Avatar alt="" src="" />
              }
              title={message?.sender}
              subheader={messageDate}
              action={
                <Stack direction='row'>
                  <IconButton onClick={handleFoward}>
                    <Reply />
                  </IconButton>
                  <IconButton onClick={handleFoward}>
                    <ReplyAll />
                  </IconButton>
                  <IconButton onClick={handleFoward}>
                    <Forward />
                  </IconButton>
                  <IconButton onClick={handleClick}>
                    <MoreVert />
                    <Menu
                      open={optionsOpen}
                      anchorEl={anchor}
                      onClose={handleClick}
                    >
                      {MessageOptions.map((option, indx) => {
                        return <MenuItem
                          key={indx}
                          onClick={() => handleOptionClick(indx)}
                        >
                          {option}
                        </MenuItem>
                      })}
                    </Menu>
                  </IconButton>
                </Stack>
              }
              sx={{ padding: 1 }}
            />
            <CardContent sx={{ padding: 1, overflow: 'auto', height: '371px', paddingBottom: '8px !important' }}>
              <div dangerouslySetInnerHTML={{ __html: message.body }}></div>
            </CardContent>
          </Card> : <Paper sx={{ height: '470px', width: '100%', display: 'flex', flexDirection: 'column', padding: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Email sx={{ height: '50px', width: '50px' }} />
            <Typography variant='h6'>No meessage selected</Typography>
          </Paper>}
    </Box>
  )
}

const mapStateToProps = (state) => ({
  message: state.feed.selectedMessage,
  newMessage: state.feed.newMessage,
  sidebarOption: state.sidebar.selectedOption,
})

const mapDispatchToProps = (dispatch) => ({
  setNewMessage: val => dispatch(setNewMessage(val)),
  addNewMessage: val => dispatch(addNewMessage(val)),
  deleteMessage: val => dispatch(deleteMessage(val)),
  setSelectedMessage: val => dispatch(setSelectedMessage(val)),
  setSnackOpen: val => dispatch(setSnackOpen(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)
