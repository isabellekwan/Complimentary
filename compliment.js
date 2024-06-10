// List of motivational phrases
const motivationalPhrases = [
    "You can do it!",
    "Believe in yourself.",
    "You're stronger than you think.",
    "Every small step counts.",
    "Keep going, you're almost there.",
    "You're doing great!",
    "Stay positive and keep moving forward.",
    "Hard work pays off.",
    "Dream big, work hard.",
    "Success is just around the corner.",
    "Your effort will pay off.",
    "You're capable of amazing things.",
    "You're making progress every day.",
    "Never give up on your dreams.",
    "You're one step closer to your goals.",
    "You're unstoppable!",
    "You're doing better than you think.",
    "Stay focused and keep pushing forward.",
    "You're on the path to success.",
    "You've got this!",
    "You can achieve anything you set your mind to.",
    "Embrace the challenges, they make you stronger.",
    "Your potential is limitless.",
    "Success begins with a single step.",
    "You're a winner, not a quitter.",
    "You are the architect of your own destiny.",
    "Failure is a stepping stone to success.",
    "You're braver than you believe, stronger than you seem, and smarter than you think.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your positive action combined with positive thinking results in success.",
    "In the middle of difficulty lies opportunity.",
    "Every accomplishment starts with the decision to try.",
    "You're not here to be average; you're here to be awesome.",
    "You're closer than you were yesterday.",
    "The only way to do great work is to love what you do.",
    "You are capable of amazing things.",
    "You're destined for greatness.",
    "The only limit is your imagination.",
    "Your potential is endless.",
    "You're unstoppable, invincible, and powerful beyond measure."
];

// Listening command to listen to events when first called
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed...");

    // Create alarm after extension is installed / upgraded
    chrome.alarms.create("startRequest", { periodInMinutes: 4 });
    startRequest();
});

chrome.alarms.onAlarm.addListener((alarm) => {
    startRequest();
});

function getRandomPhrase() {
    // Generate a random index to select a phrase from the array
    const index = Math.floor(Math.random() * motivationalPhrases.length);
    return motivationalPhrases[index];
}

function startRequest() {
    const phrase = getRandomPhrase();
    console.log(phrase);

    var options = {
        title: "Complimentary",
        message: phrase,
        iconUrl: "/heart-icon.png", // Change to the path of your custom icon
        type: "basic",

    };
    chrome.notifications.create("", options);
}
