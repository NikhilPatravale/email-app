import { styled } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const StyledStackWrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: '507px',
    alignSelf:'start'
}))

export default function CustomStackWrapper({children}) {
  return (
    <StyledStackWrapper>
        {children}
    </StyledStackWrapper>
  )
}
