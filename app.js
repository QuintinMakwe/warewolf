// //I'm to take in prompt from users on two activities that were performed that day 
// //Each activity has a weight that refers to how much it affects the werewolf turning 
// //after taking all 14 inputs, I'll compute the total and give an output 
let Wolf = function(){
    //private static attribute
     const activityMap = [
        {'eating': 3.33},
        {'dancing': 3.33},
        {'walking': 3.33},
        {'pizza': 3.33},
        {'shawarma': 3.33},
        {'rice': 3.33},
        {'beans': 3.33},
        {'honeybeans': 3.33},
        {'strawberry': 3.33},
        {'mango': 3.33},
        {'Watermellon': 3.33},
        {'cucumber': 3.33},
        {'pineapple': 3.33},
        {'apple': 3.33},
        {'eba': 3.33},
        {'cocktail': 3.33},
        {'chicken': 3.33},
        {'fish': 3.33},
        {'stew': 3.33},
        {'akidi': 3.33},
        {'banga': 3.33},
        {'ewo': 3.33},
        {'egusi': 3.33},
        {'afang': 3.33},
        {'vegetable': 3.33},
        {'leaf': 3.33},
        {'pepper': 3.33},
        {'tomatoe': 3.33},
        {'sauce': 3.33},
        {'sardin': 3.33},

    ]

    let dailyActivity = []

    return function(name){
        //instance property
        this.name = name

        //instance methods 
        this.showActivityMap = ()=>{
            return activityMap
        }

        this.addActivity = (activity)=>{
            //loop throw the entire activity map and find a match
            let validAct = activityMap.filter(act=>{
                return Object.keys(act) == activity 
            })
            if(validAct.length > 0){
                dailyActivity.push(activity)
                //check if it's a wereWolf yet 
                this.isWereWolf()
            }else{
                throw new Error(`${activity} is Not a valid activity`)
            }
        }

        this.showCurrentActivity = ()=>{
            return dailyActivity
        }

        this.totalActivityScore = () => {
            let totalScore = 0
            dailyActivity.forEach(act => {
                activityMap.forEach(activityMapAct => {
                    if(activityMapAct[act] !== undefined){
                        totalScore += activityMapAct[act]
                    }
                })
            })
            return totalScore
        }
        
        this.isWereWolf = () => {
            const totalScore = this.totalActivityScore();
            if(totalScore < 50){
                return ("Not yet a were wolf");
            }else{
                return ("Turned to a wolf")
            }
        }
    }
    
    
}
let newWolf = new Wolf()
const waar = new newWolf('kelvin');
try{
    
console.log(waar.addActivity('sauce'))
console.log(waar.addActivity('sardin'))
console.log(waar.showCurrentActivity())
console.log(waar.totalActivityScore())
}catch(err){
    console.log('::Error: ', err.message)
}
