// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Quthbullapur,IN&appid=d6e712e51ed8b0ccb1687be201e9a2a0';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}


/*
var proxy = "https://cors-anywhere.herokuapp.com/"
var url_string1 ="https://dog.ceo/api/breeds/list/all";
var url_string2 =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
fetch(url_string2) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/