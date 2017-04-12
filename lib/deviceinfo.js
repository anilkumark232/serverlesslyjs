var superagent =  require('superagent');
var Rx = require('rx');

DeviceInfo = function(){
  Device = Rx.Observable.create((observer) => {
     superagent
     .get('https://serverlessly.io/device')
     .end((err, res) => {
       if (err) {
         return observer.onError(err.errno);
       }
       let data = JSON.parse(res.text);
       observer.onNext(data);
       observer.onCompleted();
     });
  });

  return Device;
}
