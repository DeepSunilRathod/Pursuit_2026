const https = require('https');
https.get('https://docs.google.com/forms/d/e/1FAIpQLSeAY_DQZajjRFcpuXYxXyv3ZvrNRS3AfwVrxd70rHr2JPCmwg/viewform', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/FB_PUBLIC_LOAD_DATA_ = (.*?);/);
    if (match) {
        const jsonData = JSON.parse(match[1]);
        const schema = jsonData[1][1];
        schema.forEach(field => {
            const title = field[1];
            const id = field[4][0][0];
            const options = field[4][0][1];
            console.log('Field:', title);
            console.log('ID:', id);
            if(options) {
                console.log('Options:', options.map(o => o[0]));
            }
            console.log('---');
        });
    } else {
        console.log('Could not find form data');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
