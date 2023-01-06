import { createTheme } from "@mui/material";
import {indigo} from '@mui/material/colors/'

export const customTheme = createTheme({
    palette:{
        primary: indigo
    },
    breakpoints: {
        values: {
            xxxs: 0,
            xxs: 300,
            xs: 450,
            sm: 600,
            md: 750,
            lg: 1200,
            xl: 1536,
          }
    }
})