

function generate(){
    const quotes = {
        '― Tal bekerman':'life isn\'t about black and white,look around and you will see that the world is much more colorful than you thought.',
        '― Kierra C.T. Banks':'Progress is quiet until it isn\'t.',
        '― Joyce Brothers':'Trust your hunches. They\'re usually based on facts filed away just below the conscious level.',
        '― A. P. J. Abdul Kalam':'Man needs his difficulties because they are necessary to enjoy success.',
        '― Mahatma Gandi':'First they ignore you, then they laugh at you, then they fight you, then you win',
        '― Swami Vivekananda':'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
        '― Virat Kohli':'Self-belief and hard work will always earn you success.',
        '― Shah Rukh Khan':'Success is not a good teacher, failure makes you humble.'
    }
       
    let authors = Object.keys(quotes);
    
    let author = authors[Math.floor(Math.random()*authors.length)];
    
    let quote = quotes[author];
    document.getElementById('quote').innerHTML=quote;
    document.getElementById('author').innerHTML=author;
}
generate()