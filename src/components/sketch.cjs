import fetch from 'node-fetch';

/*
Pending
 FulFiled
 Reject


*/

fetch("https://breakingbadapi.com/api/characters")
  .then(result=> result.json() )
  .then(data  => console.log(data ))
  .catch((err) => console.log(err));
