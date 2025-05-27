import { Box } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const MyDetails = () => {
    return (
        <>
            <Box>
                <form action="">
                    <Box>
                    <TextField id="outlined-basic" label="First name" variant="outlined" sx={{marginRight:'10px'}} />
                    <TextField id="outlined-basic" label="First name" variant="outlined" />
                    </Box>
                    <Box sx={{marginTop:'50px'}}>
                        <TextField id="outlined-basic" label="First name" variant="outlined" />
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default MyDetails
