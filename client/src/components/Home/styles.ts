import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    appBar: {
        borderRadius: '0px 0px 4px 4px',
        margin: '0px 0px 20px 0px',
        flexGrow: 1,
    },
    heading: {
        padding: '10px',
        flexGrow: 1,
    },
    [theme.breakpoints.down('sm')]: {
        postsContainer: {
            flexDirection: 'column-reverse',
        },
    },
}))
