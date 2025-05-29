import React from 'react'
import { Box, Button } from '@mui/material'
import SettingTab from '../Components/SettingTab'

const Setting = () => {
    return (
        <>
                <Box>
                    <Box>
                        <img src="https://images.unsplash.com/photo-1624396963238-df0e48367ff7?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ height: '250px', width: '93vw' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '93vw' }}>
                        <img src="https://images.pexels.com/photos/3796989/pexels-photo-3796989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ height: '130px', width: '130px', borderRadius: '50%', marginLeft: '150px', marginTop: '-5%', border: '8px solid #0D1B2A' }} />
                        <Box>
                            <Button sx={{color:'white', border:'0.05px solid white', marginRight:'5px'}}>Cancel</Button>
                            <Button sx={{backgroundColor:'blue', color:'white'}}>Save</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{marginTop:'10px', marginLeft:'100px'}}>
                    <SettingTab />
                </Box>
        </>
    )
}

export default Setting
