const url = require("url");
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized url
console.log(myUrl.href);
// toString Method
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (doesnot get port)
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
