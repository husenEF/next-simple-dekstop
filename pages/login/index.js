import { Box, Grid, Typography } from '@mui/material';
import PublicLayout from '../../src/components/Layout/PublicLayout';
import Logo from '../../src/components/Icons/Logo';
import { fontWeight } from '@mui/system';

const Login = () => {
  return (
    <PublicLayout>
      <Grid container sx={{ height: '100%' }}>
        <Grid item sx={{ padding: 12, flex: 'auto', maxWidth: '600px' }}>
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <Logo />
            <Typography fontWeight={700} fontSize={'16px'} marginLeft="14px">
              COINPRIVY
            </Typography>
          </Box>
          <Box sx={{ marginTop: 4, paddingX: 2 }}>
            <Typography fontSize={'32px'} fontWeight="600">
              Welcome to Coinprivy
            </Typography>
            <Typography>
              is a secure platform that makes it easy to buy, sell, and store
              cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={(theme) => {
            return {
              backgroundColor: theme.palette.app.secondary,
              padding: 12,
              flexGrow: 1,
            };
          }}>
          <h2>Halo</h2>
        </Grid>
      </Grid>
    </PublicLayout>
  );
};
export default Login;
