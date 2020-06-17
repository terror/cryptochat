import React from 'react';
import { useStyles } from '../styles/useStyles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

export default function Chatwindow(props) {
    const classes = useStyles();
    const { allChatrooms, activeTopic } = props;
    return (
        <div className={classes.chatWindow}>
            {allChatrooms[activeTopic].map((chat, i) => (
                <div className={classes.flex} key={i}>
                    <Chip label={chat.from} />
                    <Typography variant="body1">{chat.msg}</Typography>
                </div>
            ))}
        </div>
    );
}
