// listening command to listen to events when first called
chrome.runtime.onInstalled.addListener(() => {
    console.log("onInstalled...");
  
    // create alarm after extension is installed / upgraded
    chrome.alarms.create("startRequest", { periodInMinutes: 4});
    startRequest();
});
  
chrome.alarms.onAlarm.addListener((alarm) => {
    startRequest();
});
  
async function startRequest() {
    const response = await fetch("https://api.quotable.io/random");
    const newData = await response.json();
    const data = `${newData.content} —${newData.author}`;
    console.log(data);
  
    var options = {
      title: "Complimentary",
      message: data,
      iconUrl: "/heart-icon.png",
      type: "basic",
      // requireInteraction: true
    };
    chrome.notifications.create("", options);
  }
