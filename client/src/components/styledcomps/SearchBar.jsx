import { Box, InputBase, styled } from '@mui/material'
import React from 'react'

const StyledSearchBar = styled(Box)(({theme}) => ({
    backgroundColor: 'white',
    width: '40%',
    borderRadius: 4,
    padding: '5px 10px',
    // [theme.breakpoints.up('sm')]:{
    //     width: '40%'
    // }
    [theme.breakpoints.down('xs')]:{
        display: 'none'
    }
}))

export default function SearchBar() {
  return (
    <StyledSearchBar>
        <InputBase placeholder='Search...' sx={{height: '15px'}} />
    </StyledSearchBar>
  )
}
