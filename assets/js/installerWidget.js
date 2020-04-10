const options = JSON.parse('{{ .Param "installerOptions" | jsonify }}');

function logInstallerOptions() {
  console.log(options);
};
