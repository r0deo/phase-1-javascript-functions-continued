// code your solution here

// Function that returns a String for Saturday activities
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function that returns a String for Monday work
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function that returns a function with visual flair for wrapping adjectives
  function wrapAdjective(flair = '*') {
    // Inner function that takes an adjective and wraps it in visual flair
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // "You are !!!amazing!!!"
  console.log(encouragingPromptFunction()); // "You are !!!special!!!"
  