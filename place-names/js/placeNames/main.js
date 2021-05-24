// Put your code here

const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]

for (tacoName of names)
console.log(tacoName)

console.log("")

const namesContainingThe = names.filter(theWords =>
    theWords.startsWith("The"))


for (tacoTheName of namesContainingThe)
console.log(tacoTheName)