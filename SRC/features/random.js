function cheer() {
    let replies = [
        "YAYYY!!",
        "YEAH I KNOW IM SMART",
        "WOOHOO!",
        "OWH REALLY?!",
        "THANK YOU DAD!!",
        "YAY IM GONNA TELL MARCUS!!",
        "The cosmos has "
    ];

    let randomIndex = Math.floor(Math.random() * replies.length); // return a random number between 0 and 4
    return replies[randomIndex];
}

function waitingForGemini() {
    let replies = [
        "umm theodore doesn't know this, lemme ask Marcus....",
        "wait im eating fries give me a min",
        "*let me consult my master Marcus....*",
        "uhhhhhhhhhhh",
        "don't worry, theodore's got this!"
    ];

    let randomIndex = Math.floor(Math.random() * replies.length); // return a random number between 0 and 4
    return replies[randomIndex];
}

module.exports = { cheer, waitingForGemini };