We use observable of rx for better working on asyncronous http calls.

Here is an example of DeviceInfo module
```
serverlessly.DeviceInfo().subscribe(
   (data) => {
       console.log(data);
   },
   (error) => {
       console.error(error);
   }
);
```
