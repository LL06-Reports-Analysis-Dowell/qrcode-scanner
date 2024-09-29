import { Button, Container, Box } from '@mui/material';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const links = {
  qrcode: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991"
  },
  myfridge: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellmyfridge",
    appleStoreLink: "https://apps.apple.com/in/app/dowell-my-fridge/id6670190938"
  },
  kiosk: {
    googlePlayLink: "",
    appleStoreLink: ""
  },
  scale: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991"
  },
  other: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991"
  }
};

const App = () => {
  const location = useLocation();
  const [storeLinks, setStoreLinks] = useState(links.other);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get("productName") || "other";
    setStoreLinks(links[productName] || links.other);
  }, [location]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-cyan-400">
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
              href={storeLinks.googlePlayLink || "#"}
              target="_blank"
              className="flex items-center"
              startIcon={<FaGooglePlay />}
              disabled={!storeLinks.googlePlayLink}
            >
              Google Play
            </Button>
            <Button
              variant="contained"
              color="primary"
              href={storeLinks.appleStoreLink || "#"}
              target="_blank"
              className="flex items-center"
              startIcon={<FaApple />}
              disabled={!storeLinks.appleStoreLink}
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
