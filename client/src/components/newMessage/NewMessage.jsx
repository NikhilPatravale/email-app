import { Box, Button, Modal, Paper, styled, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { Delete, Send } from '@mui/icons-material'
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { createMessage, getMessages, createDraftMessage, deleteDraftMessage } from '../../redux/actions/apiActions';
import { setNewMessage } from '../../redux/actions/FeedActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DiscardModal from './DiscardModal';

const SendIcon = styled(Send)(({ theme }) => ({
    '.css-155nyw6-MuiButton-endIcon>*&:nth-of-type(1)': {
        fontSize: '14px'
    }
}))

const DeleteIcon = styled(Delete)(({ theme }) => ({
    '.css-155nyw6-MuiButton-endIcon>*&:nth-of-type(1)': {
        fontSize: '14px'
    }
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    height: '30px',
    marginBottom: '10px',
    '.css-1v0hu2-MuiInputBase-root-MuiInput-root': {
        margin: 0
    }
}))


function NewMessage(props) {
    const [message, setMessage] = useState({
        sender: "nikhil@user.com",
        to: "",
        cc: "",
        bcc: "",
        subject: "",
        body: ""
    })

    const [modalOpen, setModalOpen] = useState(false)

    const { newMessage,
        setNewMessage,
        getMessages,
        createDraftMessage,
        deleteDraftMessage } = props

    const messageRef = useRef()

    const changeHandler = (e) => {
        if (e.target?.id) {
            setMessage(prev => ({
                ...prev,
                [e.target.id]: e.target.value
            }))
        } else {
            setMessage(prev => ({
                ...prev,
                body: e
            }))
        }
    }

    const handleSubmit = () => {
        createMessage(message)
            .then(() => {
                getMessages(112233).then(() => {
                    setMessage({
                        sender: "nikhil@user.com",
                        to: "",
                        cc: "",
                        bcc: "",
                        subject: "",
                        body: ""
                    })
                    setNewMessage({ type: "", defaultMessage: null })
                })
            })
    }

    useEffect(() => {
        messageRef.current = message
    }, [message])

    useEffect(() => {
        if (newMessage.defaultMessage) {
            setMessage(newMessage.defaultMessage)
        }
    }, [newMessage.defaultMessage])

    useEffect(() => {
        return () => {
            if (newMessage.type) {
                createDraftMessage(messageRef.current)
                    .then(() => {
                        getMessages(112233)
                        setNewMessage({ type: "", defaultMessage: null })
                    })
                    .catch(err => console.log(err))
            }
        }
    }, [])

    return (
        <Paper sx={{ height: '471px', padding: 1 }}>
            <StyledTextField
                value={message.to}
                onChange={changeHandler}
                placeholder='to'
                id='to'
                InputLabelProps={{ style: { fontSize: '16px' } }}
                inputProps={{ style: { height: '20px', fontSize: '16px', padding: '5px' } }}
                variant='standard'
                size='small'
                fullWidth
            />
            <StyledTextField
                value={message.cc}
                onChange={changeHandler}
                placeholder='cc'
                id='cc'
                InputLabelProps={{ style: { fontSize: '16px' } }}
                inputProps={{ style: { height: '20px', fontSize: '16px', padding: '5px' } }}
                variant='standard'
                size='small'
                fullWidth
            />
            <StyledTextField
                value={message.bcc}
                onChange={changeHandler}
                placeholder='bcc'
                id='bcc'
                InputLabelProps={{ style: { fontSize: '16px' } }}
                inputProps={{ style: { height: '20px', fontSize: '16px', padding: '5px' } }}
                variant='standard'
                size='small'
                fullWidth
            />
            <StyledTextField
                value={message.subject}
                onChange={changeHandler}
                placeholder='subject'
                id='subject'
                InputLabelProps={{ style: { fontSize: '16px' } }}
                inputProps={{ style: { height: '20px', fontSize: '16px', padding: '5px' } }}
                variant='standard'
                size='small'
                fullWidth
            />
            <ReactQuill
                id='body'
                value={message.body}
                onChange={changeHandler}
            />
            <Stack alignItems='flex-end'>
                <Stack
                    direction='row'
                    gap={1}
                    alignSelf='flex-end'
                    sx={{ marginTop: '9px' }}
                >
                    <Button
                        variant='contained'
                        color='success'
                        endIcon={<SendIcon />}
                        size='small'
                        sx={{ fontSize: '12px', height: '25px' }}
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                    <Button
                        variant='contained'
                        color='warning'
                        endIcon={<DeleteIcon />}
                        size='small'
                        sx={{ fontSize: '12px', height: '25px' }}
                        onClick={() => setModalOpen(true)}
                    >
                        Disacrd
                    </Button>
                </Stack>
                <DiscardModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    deleteDraftMessage={deleteDraftMessage}
                    id={message._id}
                    setNewMessage={setNewMessage}
                    getMessages={getMessages}
                />
            </Stack>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    newMessage: state.feed.newMessage
})

const mapDispatchToProps = (dispatch) => ({
    createMessage: val => dispatch(createMessage(val)),
    getMessages: val => dispatch(getMessages(val)),
    setNewMessage: val => dispatch(setNewMessage(val)),
    createDraftMessage: val => dispatch(createDraftMessage(val)),
    deleteDraftMessage: val => dispatch(deleteDraftMessage(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage)
