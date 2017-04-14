
We use observable of rx for better working on asyncronous http calls.

Here is an example of FileUpload module
```
var serverlessly = require('serverlesslyjs');

serverlessly.FileUpload(* file Path *).subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);

```

Results the "url" of the uploaded file.
