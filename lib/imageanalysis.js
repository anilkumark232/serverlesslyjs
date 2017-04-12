var superagent =  require('superagent');
var Rx = require('rx');

ImageAnalysis = function(file){

  Image = Rx.Observable.create((observer) => {
    var fs = require('fs');
    if (fs.existsSync(file)) {
       superagent
       .post('https://serverlessly.io/imageanalysis')
       .attach('file',file)
       .end((err, res) => {
         if (err) {
           return observer.onError(err.errno);
         }
         let data = JSON.parse(res.text);
         observer.onNext(data);
         observer.onCompleted();
       });
    }
    else{
      return observer.onError("File not found in the specified path : "+file);
    }

  });

  return Image;
}
