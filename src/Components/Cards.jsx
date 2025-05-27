import React from 'react'
import { Box, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';


const PurpleWave = () => (
  <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#5A4FFF"/>
    </filter>
  </defs>

  <path 
    d="M0 60 
       Q 15 50, 30 55 
       T 60 45 
       T 90 50 
       T 120 40 
       T 150 45"
    stroke="#5A4FFF" 
    stroke-width="3" 
    fill="none" 
    stroke-linecap="round" 
    filter="url(#glow)" />
</svg>)

const Cards = () => {
  return (
    <>
     <Card sx={{height: '230px', width: { xs: '20%', lg: '20%' }, marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',borderRadius: '15px', minWidth:'250px'}}>
                <CardContent sx={{ marginTop:'10px' }} >
                  <Box >
                    <Box sx={{display:'flex', justifyContent:'space-evenly', marginBottom:'30%'}}>
                      <StarIcon />
                      <Typography>Task Completed</Typography>
                      <Typography>08</Typography>
                    </Box>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                      <PurpleWave/>
                      <Box sx={{width:'60%'}}>
                        <Typography color='text.secondary'>10+ more</Typography>
                        <Typography color='text.secondary'>from last week</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
    </>
  )
}

export default Cards
