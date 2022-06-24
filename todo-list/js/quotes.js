const quoteObj = [
  {
    quoteText:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    quoteText: 'That which does not kill us makes us stronger.',
    author: 'Friedrich Nietzsche',
  },
  {
    quoteText:
      'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    author: 'Bernard M. Baruch',
  },
  {
    quoteText:
      'We must not allow other people’s limited perceptions to define us.',
    author: 'Virginia Satir',
  },
  {
    quoteText: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    quoteText: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quoteText: 'This above all: to thine own self be true.',
    author: 'William Shakespeare',
  },
  {
    quoteText: 'If you cannot do great things, do small things in a great way.',
    author: 'Napoleon Hill',
  },
  {
    quoteText: 'If opportunity doesn’t knock, build a door.',
    author: 'Milton Berle',
  },
  {
    quoteText:
      'Wise men speak because they have something to say; fools because they have to say something.',
    author: 'Plato',
  },
];

const quotes = document.querySelector('#quotes');
const quote = quotes.querySelector('div:first-child');
const author = quotes.querySelector('div:last-child');
const todaysQuote = quoteObj[Math.floor(Math.random() * quoteObj.length)];

quote.innerText = `"${todaysQuote.quoteText}"`;
author.innerText = todaysQuote.author;
