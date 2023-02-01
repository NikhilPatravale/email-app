import { Box, Paper, Card, CardHeader, CardContent, Avatar, IconButton, Stack, Typography } from '@mui/material'
import { Reply, ReplyAll, Forward, MoreVert, Email } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewMessage from '../newMessage/NewMessage'
import moment from 'moment'
import { useState } from 'react'
import { setIsForward, setNewMessage } from '../../redux/actions/FeedActions'

function MessageContainer(props) {
  const { message, newMessage, setForward, setNewMessage} = props
  const [messageDate, setMessageDate] = useState("")

  useEffect(() => {
    if(message){
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
                <IconButton>
                  <Reply />
                </IconButton>
                <IconButton>
                  <ReplyAll />
                </IconButton>
                <IconButton onClick={handleFoward}>
                  <Forward />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Stack>
            }
            sx={{ padding: 1 }}
          />
          <CardContent sx={{ padding: 1, overflow:'auto', height:'371px', paddingBottom: '8px !important'}}>
            <div dangerouslySetInnerHTML={{__html: message.body}}></div>
          </CardContent>
        </Card> : <Paper sx={{ height: '470px', width:'100%', display: 'flex', flexDirection: 'column', padding: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Email sx={{ height: '50px', width: '50px' }} />
          <Typography variant='h6'>No meessage selected</Typography>
        </Paper>}
    </Box>
  )
}

const mapStateToProps = (state) => ({
  message: state.feed.selectedMessage,
  newMessage: state.feed.newMessage
})

const mapDispatchToProps = (dispatch) => ({
  setForward: val => dispatch(setIsForward(val)),
  setNewMessage: val => dispatch(setNewMessage(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)
