console.log("Do you believe in magic?")
console.log("------------------------")

const allSpells = [
    {
        name:"Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    
    {
        name:"Conjure some gold for local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name:"Give a person who is deaf the ability to hear",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name:"Make yourself the emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name:"Convince your relatives that your political views are correct",
        isEvil: false,
        energyRequired: 100.0
    }
]

    const goodSpells = allSpells.filter(spell => spell.isEvil === false)
    const evilSpells = allSpells.filter(spell => spell.isEvil === true)

   
    const goodList = goodSpells.map (p => {
       return p.name
    })
   
    const evilList = evilSpells.map (p => {
       return p.name
    })

    
    console.log("Good Book")
    goodList.map(g => {
            return (
              console.log("     " + g)
            )
        })
         

    console.log("Evil Book")
    evilList.map(g => {
        return (
         console.log("     " + g)
         )
            })
              

  
  
     