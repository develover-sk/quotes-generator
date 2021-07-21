const quotesAll = [
    "Stop caring about what other people think of you, how they perceive you, or if they approve of you. Start to focus on your inner peace.",
    "Happiness is part of who we are. Joy is the feeling.",
    "No matter whether you believe in luck or chance, the final decision is from yourself.",
    "Grateful souls focus on the happiness and abundance present in their lives and this in turn attracts more abundance and joy towards them.",
    "Inaction creates nothing. Action creates success.",
    "A person today who seems to have a great sense of self-esteem has his or her childhood days to thank for it.",
    "The good thing about a self-help book is that if you misunderstand something then it won't mock you.",
    "Once you fight the demons that live in your heart, the ones that live outside will never knock you door.",
    "When you close your eyes, do you actually stop seeing? Who is observing the darkness then?",
    "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    "The first draft is just you telling yourself the story.",
    "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.",
    "Start before you’re ready.",
    "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
    "If you have no critics, you’ll likely have no success.",
    "The true alchemists do not change lead into gold; they change the world into words.",
    "Imagination is everything. It is the preview of life’s coming attractions.",
    "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    "Tomorrow we will run faster, stretch out our arms farther….",
    "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    "There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.",
    "If you’re always trying to be normal you will never know how amazing you can be",
    "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape.",
    "If you can feel that staying human is worthwhile, even when it can’t have any result whatever, you’ve beaten them.",
    "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.",
    "Never fear the darkness… The strongest trees are rooted in the dark places of the earth. Darkness will be your cloak, your shield, your mother’s milk. Darkness will make you strong.",
    "Integrity is doing the right thing, even when no one is watching.",
    "All we have to decide is what to do with the time that is given us.",
    "Sometimes you climb out of bed in the morning and you think ‘I’m not going to make it’, but you laugh inside, remembering all the times you’ve felt that way.",
    "You have to take risks. We will only understand the miracle of life fully when we allow the unexpected to happen.",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "Just as soon as you attain to one ambition you see another one glittering higher up still. It does make life so interesting.",
    "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    "The world is not to be put in order. The world is order. It is for us to put ourselves in unison with this order.",
    "I am only one, but still I am one. I cannot do everything, but still I can do something; And because I cannot do everything I will not refuse to do the something that I can do.",
    "The power of finding beauty in the humblest things makes home happy and life lovely.",
    "If one by one we counted people out, for the least sin, it wouldn’t take us long to get so we had no one left to live with. For to be social is to be forgiving.",
    "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
    "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    "And now that you don't have to be perfect, you can be good.",
    "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
    "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
    "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    "Don't cry because it's over. Smile because it happened.",
    "Everything is hard before it is easy.",
    "Anyone who has never made a mistake has never tried anything new.",
    "Don't let your happiness depend on something you may lose.",
    "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
    "We are all broken, that's how the light gets in.",
    "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
    "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day.",
    "It hurt because it mattered.",
    "Some of us think holding on makes us strong; but sometimes it is letting go.",
    "I want to taste and glory in each day, and never be afraid to experience pain.",
    "Life's not fair; why should I be.",
    "Never look back unless you are planning to go that way.",
    "Sooner or later even the fastest runners have to stand and fight.",
    "We rise by lifting others.",
    "I can be changed by what happens to me. But I refuse to be reduced by it.",
    '"Things usually work out in the end."<br>"What if they don\'t ?" <br>"That just means you haven\'t come to the end yet.',
    "Life is a journey, not a destination.",
    "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.",
    "All that is gold does not glitter, not all those who wander are lost; the old that is strong. Does not wither, deep roots are not reached by the frost.",
    "There are chords in the hearts of the most reckless which cannot be touched without emotion.",
    "The clearest way into the universe is through a forest wilderness.",
    "As you start to walk on the way, the way appears.",
    "It takes a great deal of courage to see the world in all its tainted glory, and still love it.",
    "To thine own self be true.",
    "Never think of pain or danger or enemies a moment longer than is necessary to fight them.",
    "Straight roads do not make skillful drivers.",
    "And in the end, we were all just humans... drunk on the idea that love, only love, could heal our brokenness.",
    "To avoid criticism: say nothing, do nothing, be nothing.",
    "Dwell in possibility.",
    "Trust our heart if the seas catch fire, live by love though the stars walk backwards.",
    "When you can't change the direction of the wind, adjust your sails.",
    "Have faith, have faith. When you have nothing else have faith.",
    "Let yourself be gutted. Let it open you. Start there.",
    "Laugh loudly, laugh often, and most important, laugh at yourself.",
    "Life is tough my darling, but so are you.",
    "There's very little in my world that a foot massage and a thin-crust, everything-on-it pizza won't set right.",
    "No matter what the day brings and no matter how hard life hits you, if you can breathe, smile and keep moving on! Once you have life, know that God is alive!",
    "So you had a bad day. Kick it aside and be grateful for one less bad day to pass through.",
    "Keep calm when things don’t go according to your expectations! Beautiful things always meet friction!",
    "Never give up on someone who is having a bad day. Tomorrow could be yours.",
    "A bad day doesn’t cancel out a good life. Keep going.",
    "Nothing can dim the light that shines from within.",
    "Anything worth dying for is certainly worth living for.",
    "Today is a hard day. Sometimes, there are hard days. Days stretched so tight with pain that they seem as if they can allow no room for hope.",
    "How was your day? ought to be 'How did you look at your day?'",
    "All heroes probably had doubts sometimes, she told herself. If she ever met Maximal Star, she would mention that he ought to write about the parts in between the daring rescues. The parts where you feel like a big time faker and failure.",
    "When you are having a really crappy day, and life seems to be kicking your ass, try to force your self to laugh. If you can achieve a smile and a laugh, you can chase any demons away.",
    "Never view obstacles in your path as the enemy. Rather, view any obstacles as detour signs to avoid pitfalls.",
    "The most common way people give up their power is by thinking they don’t have any.",
    "There is no good day or bad day, only good or bad actions.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "You begin saving the world by saving one man at a time; everything else is grandiose romanticism or politics.",
    "There is always something left to love.",
    "Each moment is a place you’ve never been.",
    "Great works are performed not by strength but by perseverance.",
    "Feel, he told himself, feel, feel, feel. Even if what you feel is pain, only let yourself feel."
]
const authorAll = [
    "Tisha Marie Payton.",
    "Tony DeLiso.<br>Legacy: The Power Within.",
    "Stephen Richards.",
    "Stephen Richards.<br>Think Your way to Success: Let Your Dreams Run.",
    "Stephen Richards.",
    "Stephen Richards.<br>Boost Your Self Esteem.",
    "Stephen Richards.",
    "Birdy Fogh.<br> Stay ... I need you.",
    "Prateek Shuklaji.<br>Buddha's House of Mirrors.",
    "William Faulkner.",
    "Terry Pratchett.",
    "Octavia E. Butler.",
    "Steven Pressfield.",
    "Stephen King",
    "Malcolm X.",
    "William H. Gass.",
    "Albert Einstein.",
    "HENRY DAVID THOREAU.",
    "F. SCOTT FITZGERALD.",
    "DALE CARNEGIE.",
    "JANE AUSTEN.",
    "MAYA ANGELOU",
    "CHARLES DICKENS.",
    "GEORGE ORWELL.",
    "J. K. ROWLING.",
    "GEORGE R.R. MARTIN.",
    "C.S. LEWIS.",
    "J. R. R. TOLKIEN.",
    "CHARLES BUKOWSKI.",
    "PAULO COELHO.",
    "WILLIAM SHAKESPEARE.",
    "LUCY MAUD MONTGOMERY.",
    "MARK TWAIN.",
    "HENRY MILLER.",
    "EDWARD EVERETT HALE",
    "LOUISA MAY ALCOTT.",
    "ROBERT FROST.",
    "Bill Watterson.",
    "Stephen Chbosky.",
    "John Steinbeck.",
    "Charles Darwin.",
    "Ray Bradbury.",
    "Maya Angelou.",
    "Oscar Wilde.",
    "Dr. Seuss.",
    "Johann Wolfgang von Goethe.",
    "Albert Einstein.",
    "C.S. Lewis.",
    "Chuck Palahniuk.",
    "Ernest Hemingway.",
    "Stephen King.",
    "Brad Meltzer.",
    "John Green.",
    "Herman Hesse.",
    "Sylvia Plath",
    "Margaret Atwood",
    "Henry David Thoreau.",
    "​Stephen King.",
    "​Robert Ingersoll.",
    "​Maya Angelou.",
    "​Jeanette Walls.",
    "Ralph Waldo Emerson.",
    "Audre Lorde.",
    "J.R.R. Tolkien.",
    "​Edgar Allen Poe.",
    "​John Muir.",
    "​Rumi.",
    "​Oscar Wilde.",
    "​William Shakespeare.",
    "​Ayn Rand.",
    "Paula Coelho.",
    "F. Scott Fitzgerald.",
    "Aristotle.",
    "​Emily Dickinson.",
    "E.E. Cummings.",
    "​H. Jackson Brown Jr.",
    "​Francine Rivers.",
    "​Cheryl Strayed.",
    "​Chelsea Handler.",
    "​Stephanie Bennett Henry.",
    "G.A. McKevett.",
    "Ernest Agyemang Yeboah",
    "Richelle E. Goodrich",
    "Ernest Agyemang Yeboah.",
    "Giovannie de Sadeleer.",
    "Richie Norton",
    "Maya Angelou.",
    "Joseph Heller",
    "Libba Bray.",
    "Mokokoma Mokhonoana.",
    "Cassie Beasley.",
    "L.F. Young.",
    "Donald L. Hicks.",
    "Alice Walker.",
    "Amit Kalantri.",
    "Neil Gaiman.",
    "Charles Bukowski.",
    "Gabriel García Márquez.",
    "Mark Strand.",
    "Samuel Johnson.",
    "P.D. James."
]

var len;
var maxQuote;

function preset() {
    disablePrevBtn();
    disableNextBtn();
    disableLastQBtn();
    disableLastNextQBtn();
    len = quotesAll.length;
    maxQuote = parseInt(len - 1);
}


function disablePrevBtn() {
    let prevBtn = document.querySelector('.previous');
    prevBtn.style.cursor = 'not-allowed';
    prevBtn.style.background = 'rgb(0,0,0, 0.2)';
}

function disableNextBtn() {
    let nextBtn = document.querySelector('.next');
    nextBtn.style.cursor = 'not-allowed';
    nextBtn.style.background = 'rgb(0,0,0, 0.2)';
}

function disableLastQBtn() {
    let lastQBtn = document.querySelector('.last');
    lastQBtn.style.cursor = 'not-allowed';
    lastQBtn.style.background = 'rgb(0,0,0, 0.2)';
}

function disableLastNextQBtn() {
    let lastNextQBtn = document.querySelector('.lastNext');
    lastNextQBtn.style.cursor = 'not-allowed';
    lastNextQBtn.style.background = 'rgb(0,0,0, 0.2)';
}

function enablePrevBtn() {
    let prevBtn = document.querySelector('.previous');
    prevBtn.style.cursor = 'pointer';
    prevBtn.style.background = 'radial-gradient(circle, rgba(255, 0, 18, 0.5355275899422269) 0%, rgba(251, 118, 121, 1) 100%)';
}

function enableNextBtn() {
    let nextBtn = document.querySelector('.next');
    nextBtn.style.cursor = 'pointer';
    nextBtn.style.background = 'radial-gradient(circle, rgba(255, 0, 18, 0.5355275899422269) 0%, rgba(251, 118, 121, 1) 100%)';
}

function enableLastQBtn() {
    let lastQBtn = document.querySelector('.last');
    lastQBtn.style.cursor = 'pointer';
    lastQBtn.style.background = 'tomato';
}

function enableLastNextQBtn() {
    let lastNextQBtn = document.querySelector('.lastNext');
    lastNextQBtn.style.cursor = 'pointer';
    lastNextQBtn.style.background = 'tomato';
}


var i = -1;
var temp = -1;
var lastQ = -1;
var lastNextQ = -1;
var prevQ = -1;
var nextQ = -1;

var r1;
var r2;


function randNum() {
    r1 = Math.random();
    i = Math.floor(r1 * maxQuote);
}



function printQuote(index) {

    let title = document.querySelector('#title');
    let quote = document.querySelector('#quotes');
    let auth = document.querySelector('#author');
    let cred = document.querySelector('#post-credit');
    title.innerHTML = "&#128525;";
    quote.innerHTML = `&ldquo; ${quotesAll[index].toUpperCase()} &rdquo;`;
    auth.innerHTML = `&mdash; ${authorAll[index]}`;
    cred.innerHTML = `${index+1}`;
}

function replaceQuote() {
    lastQ = i;
    temp = i;
    randNum();
    while (i == temp) {
        randNum();
    }
    lastNextQ = null;
    enablePrevBtn();
    enableNextBtn();
    printQuote(i);
    if (lastQ != -1) {
        enableLastQBtn();
        disableLastNextQBtn();
    }
    if (i == 0) {
        disablePrevBtn();
        disableLastQBtn();
    }
    if (i == maxQuote) {
        disableNextBtn();
    }
    prevQ = i;
    nextQ = i;
}


function getPrev() {
    if (prevQ != -1) {
        // lastNextQ = prevQ;
        // lastQ = null;
        // enableLastNextQBtn();
        // disableLastQBtn();
        enableNextBtn();
        if (prevQ > 0) {
            prevQ--;
            nextQ = prevQ;
            printQuote(prevQ);
        }
        enableNextBtn();
    }
    if (prevQ <= 0) {
        disablePrevBtn();
    }
    disableLastQBtn();
    disableLastNextQBtn();
    lastQ = -1;
    lastNextQ = -1;
}

function getNext() {
    if (nextQ != -1) {
        enableLastQBtn();
        disableLastNextQBtn();
        enablePrevBtn();
        if (nextQ < maxQuote) {
            nextQ++;
            prevQ = nextQ;
            printQuote(nextQ);
        }
    }
    if (nextQ >= maxQuote) {
        disableNextBtn();
    }
    disableLastQBtn();
    disableLastNextQBtn();
    lastQ = -1;
    lastNextQ = -1;
}
var letsTemp = -1;

function last() {
    disableLastQBtn();
    if (lastQ != -1 && lastQ != null) {
        letsTemp = lastQ;
        lastNextQ = i;
        prevQ = lastQ;
        nextQ = lastQ;
        enableLastNextQBtn();
        enableNextBtn();
        printQuote(lastQ);
        if (lastQ != 0) {
            enablePrevBtn();
        }
    }
    if (lastQ == maxQuote) {
        disableNextBtn();
    }
    if (lastQ == 0) {
        disablePrevBtn();
    }
}

function lastNext() {
    disableLastNextQBtn();
    if (letsTemp != i) {
        if (lastNextQ != -1 && lastNextQ != null) {
            lastQ = letsTemp;
            prevQ = lastNextQ;
            nextQ = lastNextQ;
            enableLastQBtn();
            printQuote(lastNextQ);
            if (lastNextQ != 0) {
                enablePrevBtn();
            }
        }
    }
    if (lastNextQ == maxQuote) {
        disableNextBtn();
    }
    if (lastNextQ == 0) {
        disablePrevBtn();
    }
}


function copyIt() {
    //as of now
    document.write("Error! <br> Your browser doesn't support copy function")
}