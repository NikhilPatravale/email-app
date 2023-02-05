import { Snackbar, Alert, Slide } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { setSnackOpen } from '../../redux/actions/MessageAction';

function SlideTransition(props) {
    return <Slide {...props} direction="right" />;
}

function SnackBar(props) {

    const { snack, setOpen } = props
    const { open, message, type } = snack

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            TransitionComponent={SlideTransition}
            autoHideDuration={5000}
            elevation={15}
            open={open}
            onClose={() => setOpen({open: false, message: '', type})}>
            <Alert variant="filled" severity={type} onClose={() => setOpen(false)} >
                {message}
            </Alert>
        </Snackbar>
    )
}

const mapStateToProps = (state) => ({
    snack: state.messages.snackOpen
})

const mapDispatchToProps = (dispatch) => ({
    setOpen: val => dispatch(setSnackOpen(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)