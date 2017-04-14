var serverlessly = require('../');

serverlessly.ImageAnalysis(__dirname + "/teddy.jpg").subscribe(
   (data) => {
       console.log(data.faces);
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

serverlessly.FileUpload(__dirname + "/teddy.jpg").subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);
