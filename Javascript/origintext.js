var previousRandom = 0;
var textSamples = [
  "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
  "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.",
  "He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves.",
  "There is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable: I simply am not there.",
  '"Why did you do all this for me?" he asked. "I don\'t deserve it. I\'ve never done anything for you." "You have been my friend," replied Charlotte. "That in itself is a tremendous thing."',
  "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what.",
  "And Lot's wife, of course, was told not to look back where all those people and their homes had been. But she did look back, and I love her for that, because it was so human. So she was turned to a pillar of salt. So it goes. People aren't supposed to look back. I'm certainly not going to do it anymore.",
  "Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter-tomorrow we will run faster, stretch out our arms farther...And then one fine morning—So we beat on, boats against the current, borne back ceaselessly into the past.",
  "There is a tide in the affairs of men. Which, taken at the flood, leads on to fortune; Omitted, all the voyage of their life is bound in shallows and in miseries. On such a full sea are we now afloat, And we must take the current when it serves, Or lose our ventures.",
  "Towards thee I roll, thou all-destroying but unconquering whale; to the last I grapple with thee; from hell's heart I stab at thee; for hate's sake I spit my last breath at thee."
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
