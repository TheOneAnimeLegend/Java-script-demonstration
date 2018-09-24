// Hello world function
function greet (fistname, lastName){
  console.log('Hello' + firstname + "world" + lastname);
}

function square (number) {
  return number*number
}

//firstname, Lastname, age, ageAfraid, hair, male, female
let MarkMercer = ["Mark", "Mercer", 13, 29, null, true, false];
let MeganSpence = ["Megan", "Spence", 14, null, true, false, true];

//calling functions, with arguements
greet (MarkMercer[0], MarkMercer[1])
greet (MeganSpence[0], MeganSpence[1])
greet (square(MarkMercer[2]), MeganSpence[2])
