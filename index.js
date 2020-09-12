const project_name = 'random-quote-machine';

const quotes = [{
  text: "Well Bones, do the new medical facilities meet with your approval?",
  author: "-Kirk"
}, {
  text: "Live long and prosper",
  author: '-Spock'
}, {
  text: "Computers make excellent and efficient servants, but I have no wish to serve under them.",
  author: "-Spock"
}, {
  text: "In critical moments, men sometimes see exactly what they wish to see.",
  author: "-Spock"
}, {
  text: "When you eliminate the impossible, whatever remains, however improbable, must be the truth.",
  author: "-Spock"
}, {
text: "The needs of the many outweigh the needs of the few.",
  author: "-Spock"
}, {
text: "What am I, a doctor or a moon-shuttle conductor?",
  author: "-McCoy"
}, {
text: "Resistance Is Futile",
  author: "-Borg "
}, {
text: "In Space, all warriors are Cold Warriors.",
  author: "-Klingon Proverb"
}, {
  text: "How we deal with death is at least as important as how we deal with life",
  author: "-Kirk"
}];

//const textDiv = document.getElementById('text');
//const authorDiv = document.getElementById('author');
//const newQuoteBtn = document.getElementById('new-quote');
//const tweetBtn = document.getElementById('tweet-quote');


function fetchQuote() {
  let random = Math.floor(Math.random() * quotes.length); 
console.log(random);
document.getElementById("text").innerHTML = quotes[random].text;
document.getElementById("author").innerHTML = quotes[random].author;
}
 