var superagent =  require('superagent');
var Rx = require('rx');

FileUpload = function(file){

  Uploadfile = Rx.Observable.create((observer) => {
    var fs = require('fs');
    if (fs.existsSync(file)) {
       superagent
       .post('https://serverlessly.io/file')
       .attach('file',file)
       .end((err, res) => {
         if (err) {
           return observer.onError(err.errno);
         }

         let data = res.text;
         observer.onNext(data);
         observer.onCompleted();
       });
    }
    else{
      return observer.onError("File not found in the specified path : "+file);
    }

  });

  return Uploadfile;
}
