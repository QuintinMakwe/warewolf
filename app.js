const prompt = require('prompt-sync')({sigint: true});
// //I'm to take in prompt from users on two activities that were performed that day 
// //Each activity has a weight that refers to how much it affects the werewolf turning 
// //after taking all 14 inputs, I'll compute the total and give an output 
let Wolf = function(){
    //private static attribute
     const activityMap = [
        {'eating': 3},
        {'hunting': 3},
        {'moonlight': 7},
        {'barking': 4},
        {'sleeping': 5},
    ]

    let dailyActivity = []

    return function(name){
        //instance property
        this.name = name

        //instance methods 
        this.showActivityMap = ()=>{
            const result =  activityMap.map(act => {
                return Object.keys(act)
            })
            return result
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
            return Math.ceil(totalScore)
        }
        
        this.isWereWolf = () => {
            const totalScore = this.totalActivityScore();
            if(totalScore < 70){
                return ("didn't turn to a  wolf :(");
            }else{
                return ("turned to a wolf :)")
            }
        }
    }
    
    
}
let newWolf = new Wolf()
const wolfName = prompt("Please enter your wolf's identifier: ");
const yourWolf = new newWolf(`${wolfName}`)
prompt(`::The next series of prompts you'll receive will require you enter at least one action your wolf performed on that day. Follow through till the 14th day, cheers:) Here is a list of possible actions your wolf can perform: ${yourWolf.showActivityMap()}. Press Enter to continue the program`)
function get14DaysAction(){
    for(let i = 1; i < 15; i ++){
        try{
            const wolfAction = prompt(`What did ${wolfName} do on day ${i}? `)
            yourWolf.addActivity(wolfAction);
        }catch(err){
            console.log(`::An error occurred: ${err.message}`)
            const wolfAction = prompt(`What did ${wolfName} do on day ${i}? `)
            yourWolf.addActivity(wolfAction);
        }
    }
}
get14DaysAction()
prompt(`::We are all itching to know if ${wolfName} turned, let's find out in a second `)
console.log(`${wolfName} ${yourWolf.isWereWolf()}`)
console.log(`${wolfName}'s score was ${yourWolf.totalActivityScore()}`)
