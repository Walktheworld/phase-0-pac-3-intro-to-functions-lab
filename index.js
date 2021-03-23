function shout(Hello) {
    return 'Hello'.toUpperCase()
  };
  
function whisper(Hello) {
    return 'HELLO'.toLowerCase()
  };

function logShout(Hello) {
    console.log ('Hello' .toUpperCase());
  }

function logWhisper(Hello) {
    console.log ('Hello' .toLowerCase());
  };

function sayHiToGrandma (hello) {
    var firResponse = "I can't hear you!";
    var secResponse = "YES INDEED!";
    var thirResponse = "I love you, too.";
    if (hello.toLowerCase(hello) === hello) {
      return firResponse;
    }
    else if (hello.toUpperCase(hello) === hello) {
      return secResponse;
    }
    else if ("I love you, Grandma." === hello) {
      return thirResponse;
    }
  }