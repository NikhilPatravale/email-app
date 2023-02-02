import { Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import { Actions } from '../../constants/constants'

export default function DiscardModal(props) {
    const { modalOpen, setModalOpen, handleMessageDelete, id, setSaveAsDraft } = props

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            sx={{ display: 'flex', alignItems: 'center' }}
        >
            <Stack sx={{ margin: '0 auto', padding: '10px 15px', height: '115px', width: '350px', background: 'black', color: 'whitesmoke' }}>
                <Typography sx={{ marginBottom: '10px' }}>Discard Draft</Typography>
                <Typography sx={{ marginBottom: '10px' }}>Are you sure you want to delete this message?</Typography>
                <Stack direction='row' marginTop={1} gap={2}>
                    <Button
                        sx={{ fontSize: '14px', height: '25px' }}
                        color='error'
                        size='small'
                        variant='contained'
                        onClick={() => {
                            setSaveAsDraft(false)
                            handleMessageDelete(id)
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        sx={{ fontSize: '14px', color: 'black', height: '25px' }}
                        color='inherit'
                        size='small'
                        variant='contained'
                        onClick={() => setModalOpen(false)}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </Modal>
    )
}
