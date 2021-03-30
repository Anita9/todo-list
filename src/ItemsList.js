import React from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [0]
        }
    }

    handleToggle = (value) => () => {
        const currentIndex = this.state.checked.indexOf(value);
        const newChecked = [...this.state.checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        })
    }

    render() {
        return (
            <List className="itemsList">
                {this.props.items.map((item, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                    <ListItem key={index}
                        role={undefined}
                        dense
                        button
                        className="listItem"
                        onClick={this.handleToggle(item)}>
                        <ListItemIcon>
                            <Checkbox 
                                edge="end"
                                checked={this.state.checked.indexOf(item) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item} />
                        <ListItemSecondaryAction>
                            <IconButton 
                                edge="end"
                                aria-label="delete"
                                onClick={() => this.props.handleDeleteItem(index)}>
                                    <DeleteIcon />
                                </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
            </List>
        )
    }
}

export default ItemsList;