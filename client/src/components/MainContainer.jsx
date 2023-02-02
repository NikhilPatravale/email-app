import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../redux/actions/ApiActions'
import { setSnackOpen } from '../redux/actions/MessageAction'
import Feed from './feed/Feed'
import MessageContainer from './message-container/MessageContainer'
import Navbar from './navbar/Navbar'
import SnackBar from './Snackbar/SnackBar'
import Sidebar from './sidebar/Sidebar'
import CustomStackWrapper from './styledcomps/CustomStackWrapper'

function MainContainer(props) {
    const { messages, getMessages } = props
    const { loading } = messages

    useEffect(() => {
        getMessages(112233)
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <Box>
            {
                loading ? <CircularProgress color='primary' sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />
                    :
                    <>
                        <Navbar />
                        <CustomStackWrapper>
                            <Sidebar />
                            <Feed />
                            <MessageContainer />
                            <SnackBar />
                        </CustomStackWrapper>
                    </>
            }
        </Box>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages,
    snackOpen: state.messages.snackOpen
})

const mapDispatchToProps = (dispatch) => ({
    getMessages: value => dispatch(getMessages(value)),
    setSnackOpen: val => dispatch(setSnackOpen(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
