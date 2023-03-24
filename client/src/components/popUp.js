import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function BasicPopover(props) {
    return (
        <div>
            <Popover
                id={'simple-popover'}
                open={props.open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>{props.error}</Typography>
            </Popover>
        </div>
    );
}