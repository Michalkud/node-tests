// File client.js
let net = require("net");
setInterval(() => net.connect(8080).pipe(process.stdout), 200);
