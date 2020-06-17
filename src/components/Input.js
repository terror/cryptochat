import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../styles/useStyles';

export default function Input(props) {
    const classes = useStyles();
    const {
        user,
        textValue,
        activeTopic,
        setTextValue,
        sendChatAction,
    } = props;
    return (
        <div className={classes.flex}>
            <TextField
                label="Send a chat!"
                className={classes.chatBox}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    sendChatAction({
                        from: user,
                        msg: textValue,
                        topic: activeTopic,
                    });
                    setTextValue('');
                }}
            >
                Send
            </Button>
        </div>
    );
}
