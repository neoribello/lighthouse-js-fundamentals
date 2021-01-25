const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let elem = {name: ''};
    for(let x = 0; x < instructors.length; x++) {
        if(instructors[x].name.length > elem.name.length) {
            elem = instructors[x]
        }
    }
    return elem;
    
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));