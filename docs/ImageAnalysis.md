
We use observable of rx for better working on asyncronous http calls.

Here is an example of ImageAnalysis module
```
var serverlessly = require('serverlesslyjs');

serverlessly.ImageAnalysis(* Image Path *).subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);

```

Outputs the awesome features of the given image. try it to find its cool features ...
