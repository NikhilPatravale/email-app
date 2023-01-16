import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../redux/actions/apiActions'
import Feed from './feed/Feed'
import MessageContainer from './message-container/MessageContainer'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import CustomStackWrapper from './styledcomps/CustomStackWrapper'

function MainContainer(props) {
    const { messages, getMessages } = props
    const {loading} = messages

    useEffect(() => {
        getMessages(112233)
    }, [])

    // useEffect(() => {
    //     let timeoutId = setInterval(() => {
    //         console.log('Refreshed')
    //     }, 4000)

    //     return () => {
    //         clearInterval(timeoutId)
    //     }
    // }, [])

    return (
        <Box>
            { loading ? <CircularProgress color='primary' sx={{ display:'block', margin: '0 auto', marginTop: '50px'}} /> :  <>
                <Navbar />
                <CustomStackWrapper>
                    <Sidebar />
                    <Feed />
                    <MessageContainer />
                </CustomStackWrapper>
            </>}
        </Box>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages
})

const mapDispatchToProps = (dispatch) => ({
    getMessages: value => dispatch(getMessages(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
