import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const NoData = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="200px"
      sx={{ color: 'text.secondary' }}
    >
      <InfoIcon fontSize="large" sx={{ mb: 1 }} />
      <Typography variant="h6">No Data Available</Typography>
      <Typography variant="body2">{'Please add some tasks to get started.'}</Typography>
    </Box>
  );
};

export default NoData;
