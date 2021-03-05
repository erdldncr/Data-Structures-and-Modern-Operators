const game={
  team1:'Besiktas',
  team2:'PolatliSpor',
  players:[[
      'Ersin','Rossie','Wellington','Vida','Ridvan','Atiba','Josef','Ghezzal','Larin','Oguzhan','Abubakar'
  ],[
    'Akyuz','Haci Sahin','Yusuf','Bunyamin','Haci Ozgul','Bekir','Erdal','Ishak','Asim','Emir','Omer'
  ]],
  score:'4:0',
  scored:['Akyuz','Haci Sahin','Yusuf','Bunyamin'],
  date:'Nov 9th,2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5
  }
}



///destructuring players property
let [Besiktas,PolatliSpor]=game.players
console.log(Besiktas)



///destructuring besiktas array
let [Gk,...fieldplayers]=Besiktas
console.log(Gk)



///2 concat 2 teams with spread operator
let allThePlayers=[...Besiktas,...PolatliSpor]
console.log(allThePlayers)



/// adding 4 players to besiktas
Besiktas=[...Besiktas,'Akyuz','Haci Sahin','Yusuf','Bunyamin']
console.log(Besiktas)



///destructuting an object and renaming
let {odds:{team1,x:draw,team2}}=game
console.log(draw)


////using spread operator to spread objects on function parameters
const printGoals=function(...players){
  console.log(`${players.length} goal were scored.`)
}
printGoals('Akyuz','Haci Sahin','Yusuf','Bunyamin')// 4goal were scored
console.log(printGoals(...game.scored))//// 4goal were scored

////print team that likely ton win
team1<team2&& console.log(Besiktas)
team1<team2&& console.log(Besiktas)

///using for of to display names on the console
for(const [i,player] of game.scored.entries())//array
console.log(`Goal ${i+1}:${player} `)

// Goal 1:Akyuz 
// Goal 2:Haci Sahin 
// Goal 3:Yusuf 
// Goal 4:Bunyamin



///use object values
let odds=Object.values(game.odds)
let averageOdd=Object.values(game.odds).reduce((a,b)=>a+b,0)
console.log(averageOdd/odds.length)
//3.69...


///////
for( const[team, odd] of Object.entries(game.odds)){//object
  const teamStr= team==='x'?'draw':`victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}
