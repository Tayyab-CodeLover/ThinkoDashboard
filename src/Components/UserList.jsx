import { useMemo, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import axios from 'axios';


const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const UserList = () => {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  const API = 'https://fakestoreapi.com/users';
  const fetchUsers = async () => {
    try {
      const data = await axios.get(API);
      console.log(data);
      setdata(data.data);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstname',
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastname',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'username',
        header: 'Username',
        size: 200,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'address.city',
        header: 'City',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      {!loading && (
        <Box
          sx={{
            width: '100%',
            minWidth: '100%',
            overflowX: 'hidden',
            maxWidth: '90vw',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <MaterialReactTable table={table} />
        </Box>
      )}
      {loading && (<Grid container spacing={1}>
        <Grid size={5} />
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={8}>
          <Skeleton height={100} />
        </Grid>

        <Grid size={12}>
          <Skeleton height={150} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>

        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
      </Grid>)}
    </>
  )
};

export default UserList;
