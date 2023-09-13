import Nav from './Nav';

function Data() {
    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-09-13&' +
    'sortBy=popularity&' +
    'apiKey=1cc041b3f649432db9bc63422ddb55bd';

var req = new Request(url);

fetch(req)
.then(function(response) {
  console.log(response.json());
})

  return (
    <>
    <Nav></Nav>
   
    </>
  );
}

export default Data;
