import { Button, Container, Box } from '@mui/material';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-cyan-400 flex justify-center items-center">
      <Container maxWidth="sm" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:translate-y-[-5px]">
        <Box textAlign="center" mb={4}>
          <img
            className="w-48 mx-auto mb-6"
            src="https://dowellfileuploader.uxlivinglab.online/hr/logo-2-min-min.png"
            alt="Your Company Logo"
          />
          <Box display="flex" flexDirection="column" alignItems="center" gap="1em">
            <Button
              variant="contained"
              color="primary"
              href="https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3"
              target="_blank"
              className="flex items-center"
              startIcon={<FaGooglePlay />}
            >
              Google Play
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="https://apps.apple.com/us/app/dowell-scanner/id6503245991"
              target="_blank"
              className="flex items-center"
              startIcon={<FaApple />}
            >
              App Store
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;
