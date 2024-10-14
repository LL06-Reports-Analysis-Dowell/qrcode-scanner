import { Button, Container, Box } from '@mui/material';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Remove duplicate import
import { useEffect, useState } from 'react';

const links = {
  qrcode: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991",
    iosDeepLink: "qrcode://scan",
    androidDeepLink: "intent://scan#Intent;scheme=qrcode;package=com.mycompany.dowellqrcodescannerv3;end",
  },
  myfridge: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.dowell.myfridgeapp",
    appleStoreLink: "https://apps.apple.com/in/app/dowell-my-fridge/id6670190938",
    iosDeepLink: "myfridge://scan",
    androidDeepLink: "intent://scan#Intent;scheme=myfridge;package=com.dowell.myfridgeapp;end",
  },
  kiosk: {
    googlePlayLink: "", 
    appleStoreLink: "",
    iosDeepLink: "kiosk://scan",
    androidDeepLink: "intent://scan#Intent;scheme=kiosk;package=com.mycompany.dowellkiosk;end",
  },
  scale: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991",
    iosDeepLink: "scale://scan",
    androidDeepLink: "intent://scan#Intent;scheme=scale;package=com.mycompany.dowellscale;end",
  },
  other: {
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.mycompany.dowellqrcodescannerv3",
    appleStoreLink: "https://apps.apple.com/us/app/dowell-scanner/id6503245991",
    iosDeepLink: "other://scan",
    androidDeepLink: "intent://scan#Intent;scheme=other;package=com.mycompany.dowellother;end",
  }
};

const App = () => {
  const location = useLocation();
  const [storeLinks, setStoreLinks] = useState(links.other);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get("productName") || "other";
    const linksForProduct = links[productName] || links.other;

    setStoreLinks(linksForProduct);

    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        // Try to open the Android app directly
        window.location.href = linksForProduct.androidDeepLink || linksForProduct.googlePlayLink;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Attempt to open the iOS app with the deep link
        window.location.href = linksForProduct.iosDeepLink;

        // Redirect to App Store after a short timeout
        setTimeout(() => {
          window.location.href = linksForProduct.appleStoreLink;
        }, 2000); // Adjust the timeout as needed
      } else {
        setUnsupported(true); // Set unsupported state if device is not recognized
      }
    };

    detectDevice();
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
            {unsupported && (
              <p className="text-red-500">Your device is not supported. Please click a button below:</p>
            )}
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
