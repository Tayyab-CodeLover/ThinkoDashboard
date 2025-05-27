import React from 'react'
import { Box } from '@mui/material'
import SideNav from '../Components/SideNav';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';


const Task = () => {
  return (
      <Box component="main" sx={{ flexGrow: 1, width:'90vw' , p:{xs:1,lg:3}, whiteSpace:'nowrap', display: "flex", minWidth: "max-content", height: "100%", flexDirection:'column'  }}>
        <Typography sx={{ fontSize: '30px', marginBottom:'20px' }}>Todays Tasks</Typography>
        <Card sx={{ height: '100px', marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', borderRadius: '15px', display: 'flex' }}>
          <Box sx={{ display: 'flex', height: '100%', textAlign: 'center', marginRight: '50px', background: ' rgba(255, 255, 255, 0.1)', py: '18px', px: '50px', alignItems: 'center' }} >
            <Box sx={{
              borderRadius: '50%', backgroundColor: 'blue', height: '50px', width: '50px', marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <PlayArrowIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Box  >
              <Box >
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  Starts from
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                  <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><AccessTimeOutlinedIcon sx={{ marginTop: '-5px' }} />9:00 am</Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ py: '18px' }}>
            <Typography sx={{ marginBottom: '15px' }}>Search Inspiration for Project</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <InsertLinkOutlinedIcon />
              <Typography sx={{ color: 'blue', borderRight: '1px solid rgb(190,187,187)', paddingRight: '40px' }} >www.something.com</Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><SmsOutlinedIcon />8 comments</Box>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ py: '18px', px: '150px' }}>
            <Typography sx={{ marginBottom: '20px' }}>24% completed</Typography>
            <LinearProgress
              variant="determinate"
              value={24} // 50%
              sx={{
                height: 10,
                width: '200px',
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#03a9f4', // light blue
                  boxShadow: '0 0 8px #03a9f4, 0 0 16px #03a9f4',
                },
              }}
            />
          </Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Button sx={{background: ' rgba(255, 255, 255, 0.05)', color:'white', gap:'5px', padding:'10px', borderRadius:'10px'}}>
            <TimerOutlinedIcon />
            Remainder
            </Button>
          </Box>
        </Card>
         <Card sx={{ height: '100px', marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', borderRadius: '15px', display: 'flex' }}>
          <Box sx={{ display: 'flex', height: '100%', textAlign: 'center', marginRight: '50px', background: ' rgba(255, 255, 255, 0.1)', py: '18px', px: '50px', alignItems: 'center' }} >
            <Box sx={{
              borderRadius: '50%', backgroundColor: 'blue', height: '50px', width: '50px', marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <PlayArrowIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Box  >
              <Box >
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  Starts from
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                  <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><AccessTimeOutlinedIcon sx={{ marginTop: '-5px' }} />9:00 am</Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ py: '18px' }}>
            <Typography sx={{ marginBottom: '15px' }}>Search Inspiration for Project</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <InsertLinkOutlinedIcon />
              <Typography sx={{ color: 'blue', borderRight: '1px solid rgb(190,187,187)', paddingRight: '40px' }} >www.something.com</Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><SmsOutlinedIcon />8 comments</Box>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ py: '18px', px: '150px' }}>
            <Typography sx={{ marginBottom: '20px' }}>24% completed</Typography>
            <LinearProgress
              variant="determinate"
              value={24} // 50%
              sx={{
                height: 10,
                width: '200px',
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#03a9f4', // light blue
                  boxShadow: '0 0 8px #03a9f4, 0 0 16px #03a9f4',
                },
              }}
            />
          </Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Button sx={{background: ' rgba(255, 255, 255, 0.05)', color:'white', gap:'5px', padding:'10px', borderRadius:'10px'}}>
            <TimerOutlinedIcon />
            Remainder
            </Button>
          </Box>
        </Card>
         <Card sx={{ height: '100px', marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', borderRadius: '15px', display: 'flex' }}>
          <Box sx={{ display: 'flex', height: '100%', textAlign: 'center', marginRight: '50px', background: ' rgba(255, 255, 255, 0.1)', py: '18px', px: '50px', alignItems: 'center' }} >
            <Box sx={{
              borderRadius: '50%', backgroundColor: 'blue', height: '50px', width: '50px', marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <PlayArrowIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Box  >
              <Box >
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  Starts from
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                  <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><AccessTimeOutlinedIcon sx={{ marginTop: '-5px' }} />9:00 am</Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ py: '18px' }}>
            <Typography sx={{ marginBottom: '15px' }}>Search Inspiration for Project</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <InsertLinkOutlinedIcon />
              <Typography sx={{ color: 'blue', borderRight: '1px solid rgb(190,187,187)', paddingRight: '40px' }} >www.something.com</Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgb(190, 187, 187)', mt: 0.25 }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}><SmsOutlinedIcon />8 comments</Box>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ py: '18px', px: '150px' }}>
            <Typography sx={{ marginBottom: '20px' }}>24% completed</Typography>
            <LinearProgress
              variant="determinate"
              value={24} 
              sx={{
                height: 10,
                width: '200px',
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                   backgroundColor: '#9c27b0',
                   boxShadow: '0 0 8px #9c27b0, 0 0 16px #9c27b0',
                },
              }}
            />
          </Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', paddingRight:'10px'}}>
            <Button sx={{background: ' rgba(255, 255, 255, 0.05)', color:'white', gap:'5px', padding:'10px', borderRadius:'10px'}}>
            <TimerOutlinedIcon />
            Remainder
            </Button>
          </Box>
        </Card>
        
      </Box>

  )
}

export default Task
