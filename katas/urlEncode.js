const urlEncode = function(text) {
    // Put your solution here
    let str = text.split('');
    for (let x = 0; x < str.length; x++) {
        if(str[x] === ' ') {
            str[x] = '%20'
        }
    }
    return str.join('');
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));