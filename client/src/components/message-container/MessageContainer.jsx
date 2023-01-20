import { Box, Paper, Card, CardHeader, CardContent, Avatar, IconButton, Stack, Typography } from '@mui/material'
import { Reply, ReplyAll, Forward, MoreVert, Email } from '@mui/icons-material'
import React from 'react'
import { connect } from 'react-redux'
import NewMessage from '../newMessage/NewMessage'

function MessageContainer(props) {
  const { message, newMessage } = props

  return (
    <Box className='messageContainer' sx={{ flex: 3, maxWidth:'48%', minHeight: '490px', display: { xxxs: 'none', sm: 'block', alignSelf: 'start', padding: "10px 10px 10px 15px" } }}>
      {
        newMessage?.type ? <NewMessage /> :
        message ? <Card sx={{ height: '471px', padding: 1 }}>
          <Typography variant='h6' sx={{ paddingLeft: 1, fontWeight: 550 }}>{message.subject}</Typography>
          <CardHeader
            avatar={
              <Avatar alt="" src="" />
            }
            title={"Nikhil Patravale"}
            subheader={"December 17, 2022"}
            action={
              <Stack direction='row'>
                <IconButton>
                  <Reply />
                </IconButton>
                <IconButton>
                  <ReplyAll />
                </IconButton>
                <IconButton>
                  <Forward />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Stack>
            }
            sx={{ padding: 1 }}
          />
          <CardContent sx={{ padding: 1, overflow:'auto', height:'371px', paddingBottom: '8px !important'}}>{message.body}</CardContent>
        </Card> : <Paper sx={{ height: '470px', display: 'flex', flexDirection: 'column', padding: 1, justifyContent: 'center', alignItems: 'center' }}>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)
