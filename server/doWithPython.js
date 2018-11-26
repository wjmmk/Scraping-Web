  var PythonShell = require('python-shell');
  var pyshell = new PythonShell('mercadolibre.py');
  pyshell.on('message', function (message) {
    // Recibe el mensaje recibido desde el script de python
    console.log(message);
  });
  // Termina el proceso y manda un mensaje en caso de ser exitoso o arroja el error
  pyshell.end(function (err, code, signal) {
    if (err)
      throw err;
  });
