import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from '../styles/useStyles';

export default function Chatrooms(props) {
    const classes = useStyles();
    const { topics, setActiveTopic } = props;
    return (
        <div className={classes.topicsWindow}>
            <List>
                {topics.map((topic) => (
                    <ListItem
                        onClick={(e) => setActiveTopic(e.target.innerText)}
                        key={topic}
                        button
                    >
                        <ListItemText primary={topic} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
