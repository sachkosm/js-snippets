import React, { Component } from 'react'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const styles = theme => ({
    selectMenuItems: {
        fontSize: "11px"
    },
    selectBox: {
        display: "inline-flex"
    },
    selectInputBox: {
        minWidth: "50px"
    },
    selectedValueStyle: {
        fontSize: "12px",
        fontWeight: "500",
        textAlign: "left",
        paddingLeft: "15px"
    }
})

class SelectDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Select value={this.props.selectedValue}
                inputProps={{
                    id: this.props.id,
                    name: this.props.name
                }}
                classes={{
                    select: classes.selectedValueStyle
                }}
                style={{
                    width: this.props.width ? this.props.width : "auto"
                }}
                disabled={this.props.disabled}
                onChange={this.props.handleSelectChange}
                className={classNames(classes.selectInputBox)} >
                {this.props.menuItems.length > 0 ?
                    this.props.menuItems.map((item, index) => {
                        return <MenuItem
                            key={item}
                            value={item}
                            className={classes.selectMenuItems}
                            style={{
                                fontWeight: this.props.selectedValue !== item ? "500" : "700"
                            }}
                        >
                            {item}
                        </MenuItem>
                    })
                    : null}
            </Select>
        )
    }
}

SelectDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    //selectedValue: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
    //width: PropTypes.string.isRequired
}

export default compose(withStyles(styles))(SelectDropdown)
