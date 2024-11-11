const os = require('os');

const getLocalIPAddress = () => {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = '';

  for (let iface in networkInterfaces) {
    networkInterfaces[iface].forEach(details => {
      if (details.family === 'IPv4' && !details.internal) {
        ipAddress = details.address;
      }
    });
  }

  return ipAddress;
};

console.log('Local IP Address:', getLocalIPAddress());


