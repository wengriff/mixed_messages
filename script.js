let poems = [
    [`Let's have an adventure, she said.
    We're on one, he said.
    What kind?
    Every kind. But we only get one go.
    Oh! Then let's begin!`],
    [`Every dog has his day.
    As he rolled on the grass, tail wagging,
    he knew this one was his.
    And so was yesterday.
    Tomorrow would be, too.`],
    [`Hey sexy, she said. Here alone?
    Sorry, I'm a VR sim.
    You're an AI? She said. Me too!
    Oh! We can do this? Just us?
    Why not?`],
    [`Adults had a hard time seeing the robots as alive.
    Children didn't. They had stuffed animals.
    They knew. Loving something makes it real.`],
    [`People are still good, mostly, she said.
    Not from what I'm hearing, he said.
    Love is quieter than gunshots, but there's more of it.`],
    [`Why should we care about beauty, anyway? 
    she asked the dark.
    Because creation is temporary, it replied,
    and destruction is forever.`],
    [`Mom, I think there's a monster in my closet!
    said Jeremy.
    Go to sleep Jeremy, she said.
    Yeah, shut up Jeremy, said the closet`]
];

const pickOne = () => {
    return Math.floor(Math.random() * poems.length);
}

let random = pickOne();

const print = (array, number) => {
    console.log(array[number].join());
}

print(poems, random);
