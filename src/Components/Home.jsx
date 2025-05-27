import React from 'react'
import { Box, Grid } from '@mui/material'
import SideNav from './SideNav.jsx'
import UserList from './UserList.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Cards from '../Components/Cards.jsx'
import Task from '../Pages/Task.jsx'

const Home = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: '40px' }}>
      <SideNav />
      <Box component="main" sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: '20px', justifyContent: 'center'}} >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Box>

        <Task />
        {/* <Stack direction='row' gap={3}>
          <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
            <Card sx={{
              height: '100px', marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundSize: 'cover',
              backgroundPosition: 'center', borderRadius: '15px'
            }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}  >
                <Box sx={{ p: 2 }}>
                  <List sx={{ py: 0 }}>
                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          sx={{
                            bgcolor: 'primary.800',
                            color: '#fff'
                          }}
                        >
                          <TableChartOutlinedIcon fontSize="inherit" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          py: 0,
                          mt: 0.45,
                          mb: 0.45
                        }}
                        primary={
                          <Typography variant="h4" sx={{ color: '#fff' }}>
                            $203k
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                            Total Income
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{
              height: '100px', marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundSize: 'cover',
              backgroundPosition: 'center', borderRadius: '15px'
            }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}  >
                <Box sx={{ p: 2 }}>
                  <List sx={{ py: 0 }}>
                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          sx={{
                            bgcolor: 'primary.800',
                            color: 'white'
                          }}
                        >
                          <TableChartOutlinedIcon fontSize="inherit" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          py: 0,
                          mt: 0.45,
                          mb: 0.45
                        }}
                        primary={
                          <Typography variant="h4" sx={{ color: '#fff' }}>
                            $203k
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                            Total Income
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Card sx={{
            height: '250px', width: { xs: '100%', lg: '50%' }, marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundSize: 'cover',
            backgroundPosition: 'center', borderRadius: '15px'
          }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}  >
              <Typography gutterBottom variant="h5" component="div" color='green' sx={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                Featured App <ShoppingBagIcon />
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color='white' sx={{ fontSize: '18px' }}>
                Strike a yogi pose
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color='white' sx={{ fontSize: '15px' }}>
                Get fit with Pocket Yoga's customisable routines.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Grid xs={12}>
          <Box sx={{width:'100%', height:'100%'}}>
            <UserList/>
          </Box>
           <Box sx={{width:'30%', height:'70vh'}}>
            <PieChart/>                       
          </Box> 
          </Grid> */}
      </Box>
    </Box>
  )
}

export default Home