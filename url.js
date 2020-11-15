const url = require("url");

const adress = "https://medium.com/edureka/learn-node-js-b3a9c6fb632c";

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
