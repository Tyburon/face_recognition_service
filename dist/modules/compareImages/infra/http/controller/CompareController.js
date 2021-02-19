"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CompareController {
  async compare(request, response) {
    const {
      imagelink1,
      imagelink2
    } = request.query;

    const {
      PythonShell
    } = require('python-shell');

    const options = {
      mode: 'text',
      pythonPath: 'python3',
      pythonOptions: ['-u'],
      // get print results in real-time
      scriptPath: '/home/gabriel/Documents/Programs/Service/src/modules/compareImages/infra/http/controller/',
      args: [imagelink1, imagelink2]
    }; //   await PythonShell.run('hello.py', options, function(err, results) {
    //     if (err) console.log(err);
    //     // results is an array consisting of messages collected during execution
    //     console.log('results: %j', results);
    //     getResults = results;
    // });

    return await PythonShell.run('hello.py', options, function (err, results) {
      if (err) console.log(err); // results is an array consisting of messages collected during execution
      // console.log('results: %j', results);

      return response.json(results);
    });
    ;
  }

}

exports.default = CompareController;