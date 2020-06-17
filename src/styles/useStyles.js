import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '310px 50px 50px 50px',
        padding: theme.spacing(3, 2),
        boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    topicsWindow: {
        width: '20%',
        height: '300px',
        borderRight: '1px solid black',
    },
    chatWindow: { width: '70%', height: '300px', padding: '10px' },
    chatBox: { width: '85%' },
    button: { width: '15%' },
}));
