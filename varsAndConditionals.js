/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister')

} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow')

} else {
    console.log('Jamie Lannister has the same attack as Jon Snow')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain!')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25


if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
 
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log('Jon Snow health after health kit is ' + jonSnowHealth)

let coinLandsHeads = true

if (coinLandsHeads) {
console.log("The fight continues")
} else {
console.log('Jon is allowed to flee like a wee child')
}

//Jamie attacks jon 5 times

for (let i = 0; i < 5; i++) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log('Jon\'s health is now ' + jonSnowHealth)
}

//Post-lab assignment 1:
//Write logic in the for loop that detects if Jon's health gets 0 or less, in which case, you will print that Jon is dead
//   and you will stop futher loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic your wrote for the first assignement) as a while loop.
//   it should behave exactly the same
