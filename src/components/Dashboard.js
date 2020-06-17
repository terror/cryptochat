import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chatrooms from './Chatrooms';
import Chatwindow from './Chatwindow';
import { useStyles } from '../styles/useStyles';
import { Context } from '../Store';
import Input from './Input';

const Dashboard = () => {
    const classes = useStyles();
    const [textValue, setTextValue] = useState('');
    const { allChatrooms, sendChatAction, user } = React.useContext(Context);
    const topics = Object.keys(allChatrooms);
    const [activeTopic, setActiveTopic] = useState(topics[0]);

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h3">
                    Crypto Chat
                </Typography>
                <Typography variant="h5" component="h3">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <Chatrooms
                        topics={topics}
                        setActiveTopic={setActiveTopic}
                    />
                    <Chatwindow
                        allChatrooms={allChatrooms}
                        activeTopic={activeTopic}
                    />
                </div>
                <Input
                    sendChatAction={sendChatAction}
                    user={user}
                    setTextValue={setTextValue}
                    activeTopic={activeTopic}
                    textValue={textValue}
                />
            </Paper>
        </div>
    );
};

export default Dashboard;
