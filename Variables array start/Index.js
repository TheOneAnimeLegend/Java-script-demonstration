console.log('Hello World');


let MartinYu = {
FirstName: "Martin",
LastName: "Yu",
Age: "16",
ageAfraid: "16",
Haircolour: "Black",
Eyecolour: "Dark Brown",
Nationality: "Chinese/Canadian",
Personality: "Likes academics and games and anime/kpop",
Weight: "129 lbs",
Height: "171cm",
Born: "Canada, Ontario, Toronto",
Socialskills: "Intermediate",
hair: true,
male: true,
}

let PhoneBoi = {
  FirstName: "Phone",
  LastName: "Boi",
}

let memory = MartinYu.FirstName;
MartinYu.FirstName = PhoneBoi.FirstName;
PhoneBoi.FirstName = memory:


console.log("Martin's name is " + MartinYu.FirstName);
console.log("phone's name is " + PhoneBoi.FirstName);
