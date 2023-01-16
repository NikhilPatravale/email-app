import { Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField } from '@mui/material'
import { Stack } from '@mui/system';
import { Delete, Send } from '@mui/icons-material'
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

export default function NewMessage() {
    const [newMessage, setNewMessage] = useState({
        to: "",
        cc: "",
        bcc: "",
        subject: "",
        body: ""
    })

    const changeHandler = (e) => {
        if (e.target?.id) {
            setNewMessage(prev => ({
                ...prev,
                [e.target.id]: e.target.value
            }))
        } else {
            setNewMessage(prev => ({
                ...prev,
                body: e
            }))
        }
    }

    return (
        <Paper sx={{ height: '474px', padding: 1 }}>
            <StyledTextField
                value={newMessage.to}
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
                value={newMessage.cc}
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
                value={newMessage.bcc}
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
                value={newMessage.subject}
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
                value={newMessage.body}
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
                    >
                        Send
                    </Button>
                    <Button
                        variant='contained'
                        color='warning'
                        endIcon={<DeleteIcon />}
                        size='small'
                        sx={{ fontSize: '12px', height: '25px' }}
                    >
                        Disacrd
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    )
}
