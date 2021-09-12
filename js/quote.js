const quotes = [
{
    quote : "Justice delayed, is justice denied.",
    author : "William Gladstone"
},
{
    quote : "When in doubt, tell the truth.",
    author : "Mark Twain"
},
{
    quote : "Love truth, and pardon error.",
    author : "Voltaire"
},
{
    quote : "Travel is only glamorous in retrospect.",
    author : "Paul Theroux"
},
{
    quote : "Fear cannot be without hope nor hope without fear.",
    author : "Baruch Spinoza"
},
{
    quote : "The merit of an action lies in finishing it to the end.",
    author : "Genghis Khan"
},
{
    quote : "If I have lost confidence in myself, I have the universe against me.",
    author : "Ralph Waldo Emerson"
},
{
    quote : "Sometimes even to live is an act of courage.",
    author : "Seneca"
}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;

