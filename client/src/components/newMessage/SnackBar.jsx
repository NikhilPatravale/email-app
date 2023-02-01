import { Snackbar, Alert, Slide } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { setSnackOpen } from '../../redux/actions/MessageAction';

function SlideTransition(props) {
    return <Slide {...props} direction="right" />;
}

function SnackBar(props) {

    const { open, setOpen } = props

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            TransitionComponent={SlideTransition}
            autoHideDuration={5000}
            elevation={15}
            open={open}
            onClose={() => setOpen(false)}>
            <Alert variant="filled" severity="success" onClose={() => setOpen(false)} >
                Message sent
            </Alert>
        </Snackbar>
    )
}

const mapStateToProps = (state) => ({
    open: state.messages.snackOpen
})

const mapDispatchToProps = (dispatch) => ({
    setOpen: val => dispatch(setSnackOpen(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)

