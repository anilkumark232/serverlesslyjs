var serverlessly = require('../');

serverlessly.ImageAnalysis(__dirname + "/teddy.jpg").subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);

serverlessly.DeviceInfo().subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);
