import { Message } from '@mui/icons-material'
import { Badge, styled } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const StyledIconsGroup = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    gap: "20px",
    alignItems: 'center',
    dislay: 'flex',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}))

export default function NavIconsGroup() {
  return (
    <StyledIconsGroup>
        <Badge color='error' badgeContent={4} sx={{fontSize: '12px'}}>
            <Message />
        </Badge>
        <Badge color='error' badgeContent={4}>
            <Message />
        </Badge>
        <Badge color='error' badgeContent={4}>
            <Message />
        </Badge>
    </StyledIconsGroup>
  )
}
