chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" triggered`);
  
  chrome.tabs.create({url: "http://www.google.com?q=numpy"});
});