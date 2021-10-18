var previousRandom = 0;
var textSamples = [
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",

    "One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn't exist. Without imperfection, neither you nor I would exist.",

    "The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.",

    'Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.',

    "Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",

    "Your time is limited, so don’t waste it living someone else's life. Don not be trapped by dogma – which is living with the results of other people’s thinking.",

    "Watch your thoughts, they turn into words. Watch your words, they turn into actions. Watch your actions, they turn into habits. Watch your habits, they turn into character. Watch your character, it turns into your destiny. It all begins with a thought.",

    "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ",

    "Talk to yourself atleast once in a Day. Otherwise you may miss a meeting with an excellent person in this World."
];


// IIFE starts with random text sample
(function randomText() {
    var randomNumber = Math.floor(Math.random() * textSamples.length);
    var openingText = textSamples[randomNumber];
    document.querySelector("#origin-text p").innerHTML = openingText;
})();

// Allows next button to move through array
function nextRandom() {
    var nextText = previousRandom + 1;
    if (nextText === textSamples.length) {
        nextText = 0;
    }
    var nextTest = textSamples[nextText];
    document.querySelector("#origin-text p").innerHTML = nextTest;
    previousRandom = nextText;
}