import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    Dialog: {
        fontSize: '1.6rem',
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function AlertDialog(params) {
    const classes = useStyles();

    return (
        <div >
            
                <Dialog
                    TransitionComponent={Transition}
                    transitionDuration={500}
                    className={classes.Dialog}
                    open={params.open}
                    onClose={params.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.Dialog} id="alert-dialog-title">{params.title}</DialogTitle>
                    <DialogContent className={classes.Dialog}>
                        <DialogContentText className={classes.Dialog} id="alert-dialog-description">
                            {params.text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className={classes.Dialog}>
                        <Button className={classes.Dialog} onClick={params.handleClose} color="primary" autoFocus>
                            OK
                      </Button>
                    </DialogActions>
                </Dialog>
        
        </div>
    );
}
