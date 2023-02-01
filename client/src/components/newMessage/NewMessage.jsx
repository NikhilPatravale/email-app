import { Stack, Button, Paper, Snackbar, Alert } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { createMessage, getMessages, createDraftMessage, deleteDraftMessage } from '../../redux/actions/ApiActions';
import { setNewMessage, setSaveAsDraft } from '../../redux/actions/FeedActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DiscardModal from './DiscardModal';
import { addNewMessage, setSnackOpen } from '../../redux/actions/MessageAction';
import { StyledTextField } from '../styledcomps/StyledTextField';
import { SendIcon } from '../styledcomps/SendIcon';
import { DeleteIcon } from '../styledcomps/DeleteIcon';
import { SnackBar } from './SnackBar';
import { Actions } from '../../constants/constants';

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
        saveAsDraft,
        setSaveAsDraft,
        setNewMessage,
        getMessages,
        createMessage,
        createDraftMessage,
        deleteDraftMessage,
        addNewMessage,
        setSnackOpen
    } = props

    const messageRef = useRef()
    const newMessageRef = useRef()
    const saveAsDraftRef = useRef()

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
        setSaveAsDraft(false)
        let {_id, ...formattedMessage} = message
        console.log(formattedMessage)
        createMessage(formattedMessage)
            .then((res) => {
                setSnackOpen(true)
                setNewMessage({ type: "", defaultMessage: null })
                addNewMessage({type: Actions.ADD_SENT_MESSAGE, message: res})
                setMessage({
                    sender: "nikhil@user.com",
                    to: "",
                    cc: "",
                    bcc: "",
                    subject: "",
                    body: ""
                })
                // getMessages(112233).then(() => {
                //     setMessage({
                //         sender: "nikhil@user.com",
                //         to: "",
                //         cc: "",
                //         bcc: "",
                //         subject: "",
                //         body: ""
                //     })
                // })
            })
    }

    useEffect(() => {
        messageRef.current = message
        saveAsDraftRef.current = saveAsDraft
    }, [message, saveAsDraft])

    useEffect(() => {
        newMessageRef.current = newMessage

        console.log('Old: ', newMessage?.defaultMessage?._id)
        
        if (newMessage?.defaultMessage) {
            let body = newMessage.defaultMessage.body
            if(newMessage?.type === 'forward'){
                body = `
                    <br><br><br>___________________________________________________________
                    <br>From: nikhil@user.com
                    <br>
                    <br>
                ` + newMessage.defaultMessage.body
            }
            setMessage({
                ...message,
                ...newMessage.defaultMessage,
                body,
                to: newMessage.defaultMessage.to?.join(";"),
                cc: newMessage.defaultMessage.cc?.join(";"),
                bcc: newMessage.defaultMessage.bcc?.join(";"),
            })
        } else setMessage({
            sender: "nikhil@user.com",
            to: "",
            cc: "",
            bcc: "",
            subject: "",
            body: ""
        })

    }, [newMessage?.type, newMessage?.defaultMessage])

    useEffect(() => {
        setSaveAsDraft(true)
        return () => {
            if (newMessageRef.current.type && saveAsDraftRef.current) {
                let formattedMessage = {
                    ...messageRef.current,
                    to: messageRef.current.to.split(";"),
                    cc: messageRef.current.cc.split(";"),
                    bcc: messageRef.current.bcc.split(";"),
                }

                setNewMessage({ type: "", defaultMessage: null })
                createDraftMessage(formattedMessage)
                    .then((res) => {
                        addNewMessage({type: Actions.ADD_DRAFT_MESSAGE, message: res})
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
                    saveAsDraft={saveAsDraft}
                    setSaveAsDraft={setSaveAsDraft}
                />
            </Stack>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    newMessage: state.feed.newMessage,
    saveAsDraft: state.feed.saveAsDraft,
    snakOpen: state.messages.snakOpen,
})

const mapDispatchToProps = (dispatch) => ({
    createMessage: val => dispatch(createMessage(val)),
    getMessages: val => dispatch(getMessages(val)),
    setNewMessage: val => dispatch(setNewMessage(val)),
    createDraftMessage: val => dispatch(createDraftMessage(val)),
    deleteDraftMessage: val => dispatch(deleteDraftMessage(val)),
    addNewMessage: val => dispatch(addNewMessage(val)),
    setSaveAsDraft: val => dispatch(setSaveAsDraft(val)),
    setSnackOpen: val => dispatch(setSnackOpen(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage)
