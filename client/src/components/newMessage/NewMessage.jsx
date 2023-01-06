import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function NewMessage() {

    // useEffect(() => {
         
    // },[])

    return (
        <Paper sx={{ height: 'calc(100vh - 122px)', padding: 1 }}>
            <FormControl fullWidth>
                <InputLabel
                    id='option-select-lable'
                    sx={{ fontSize: '14px' }}
                >
                    Regarding
                </InputLabel>
                <Select
                    labelId='option-select-lable'
                    label='Regarding'
                    sx={{ height: '50px' }}
                    inputProps={{ padding: 0 }}
                    fullWidth
                >
                    <MenuItem value='Option 1'>Option 1</MenuItem>
                    <MenuItem value='Option 2'>Option 2</MenuItem>
                    <MenuItem value='Option 3'>Option 3</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label='Subject'
                id='subject-input'
                sx={{ height: '50px', marginTop: 1 }}
                InputLabelProps={{ sx: { fontSize: '14px' } }}
                fullWidth
            />
            <div className="quillContainer"></div>
            <ReactQuill />
        </Paper>
    )
}
