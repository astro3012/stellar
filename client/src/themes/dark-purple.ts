import { createMuiTheme } from '@material-ui/core/styles'
import { purple, amber } from '@material-ui/core/colors'

const darkPurple = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: amber[500],
        },
    },
})

export default darkPurple
