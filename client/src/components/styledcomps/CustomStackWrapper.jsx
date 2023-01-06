import { styled } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const StyledStackWrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    maxHeight: 'calc(100vh - 70px)',
    alignSelf:'start'
}))

export default function CustomStackWrapper({children}) {
  return (
    <StyledStackWrapper>
        {children}
    </StyledStackWrapper>
  )
}
