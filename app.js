//logic behind my solution is that, I'd loop through the entire events looking for the event with the most occurrence when the wolve turned. 
let Wolf = function(){
    //private static attribute
     const activityMap = [
        {"events":["carrot","exercise","weekend"],"warewolve":false},
        {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"warewolve":false},
        {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"warewolve":false},
        {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"warewolve":false},
        {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"warewolve":false},
        {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"warewolve":false},
        {"events":["pizza","brushed teeth","computer","work","touched tree"],"warewolve":false},
        {"events":["bread","beer","brushed teeth","cycling","work"],"warewolve":false},
        {"events":["cauliflower","brushed teeth","work"],"warewolve":false},
        {"events":["pizza","brushed teeth","cycling","work"],"warewolve":false},
        {"events":["lasagna","nachos","brushed teeth","work"],"warewolve":false},
        {"events":["brushed teeth","weekend","touched tree"],"warewolve":false},
        {"events":["lettuce","brushed teeth","television","weekend"],"warewolve":false},
        {"events":["spaghetti","brushed teeth","work"],"warewolve":false},
        {"events":["brushed teeth","computer","work"],"warewolve":false},
        {"events":["lettuce","nachos","brushed teeth","work"],"warewolve":false},
        {"events":["carrot","brushed teeth","running","work"],"warewolve":false},
        {"events":["brushed teeth","work"],"warewolve":false},
        {"events":["cauliflower","reading","weekend"],"warewolve":false},
        {"events":["bread","brushed teeth","weekend"],"warewolve":false},
        {"events":["lasagna","brushed teeth","exercise","work"],"warewolve":false},
        {"events":["spaghetti","brushed teeth","reading","work"],"warewolve":false},
        {"events":["carrot","ice cream","brushed teeth","television","work"],"warewolve":false},
        {"events":["spaghetti","nachos","work"],"warewolve":false},
        {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"warewolve":false},
        {"events":["spaghetti","peanuts","computer","weekend"],"warewolve":true},
        {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"warewolve":false},
        {"events":["potatoes","ice cream","brushed teeth","work"],"warewolve":false},
        {"events":["peanuts","brushed teeth","running","work"],"warewolve":false},
        {"events":["potatoes","exercise","work"],"warewolve":false},
        {"events":["pizza","ice cream","computer","work"],"warewolve":false},
        {"events":["lasagna","ice cream","work"],"warewolve":false},
        {"events":["cauliflower","candy","reading","weekend"],"warewolve":false},
        {"events":["lasagna","nachos","brushed teeth","running","weekend"],"warewolve":false},
        {"events":["potatoes","brushed teeth","work"],"warewolve":false},
        {"events":["carrot","work"],"warewolve":false},
        {"events":["pizza","beer","work","dentist"],"warewolve":false},
        {"events":["lasagna","pudding","cycling","work"],"warewolve":false},
        {"events":["spaghetti","brushed teeth","reading","work"],"warewolve":false},
        {"events":["spaghetti","pudding","television","weekend"],"warewolve":false},
        {"events":["bread","brushed teeth","exercise","weekend"],"warewolve":false},
        {"events":["lasagna","peanuts","work"],"warewolve":true},
        {"events":["pizza","work"],"warewolve":false},
        {"events":["potatoes","exercise","work"],"warewolve":false},
        {"events":["brushed teeth","exercise","work"],"warewolve":false},
        {"events":["spaghetti","brushed teeth","television","work"],"warewolve":false},
        {"events":["pizza","cycling","weekend"],"warewolve":false},
        {"events":["carrot","brushed teeth","weekend"],"warewolve":false},
        {"events":["carrot","beer","brushed teeth","work"],"warewolve":false},
        {"events":["pizza","peanuts","candy","work"],"warewolve":true},
        {"events":["carrot","peanuts","brushed teeth","reading","work"],"warewolve":false},
        {"events":["potatoes","peanuts","brushed teeth","work"],"warewolve":false},
        {"events":["carrot","nachos","brushed teeth","exercise","work"],"warewolve":false},
        {"events":["pizza","peanuts","brushed teeth","television","weekend"],"warewolve":false},
        {"events":["lasagna","brushed teeth","cycling","weekend"],"warewolve":false},
        {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"warewolve":false},
        {"events":["lettuce","brushed teeth","television","work"],"warewolve":false},
        {"events":["potatoes","brushed teeth","computer","work"],"warewolve":false},
        {"events":["bread","candy","work"],"warewolve":false},
        {"events":["potatoes","nachos","work"],"warewolve":false},
        {"events":["carrot","pudding","brushed teeth","weekend"],"warewolve":false},
        {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"warewolve":false},
        {"events":["brussel sprouts","running","work"],"warewolve":false},
        {"events":["brushed teeth","work"],"warewolve":false},
        {"events":["lettuce","brushed teeth","running","work"],"warewolve":false},
        {"events":["candy","brushed teeth","work"],"warewolve":false},
        {"events":["brussel sprouts","brushed teeth","computer","work"],"warewolve":false},
        {"events":["bread","brushed teeth","weekend"],"warewolve":false},
        {"events":["cauliflower","brushed teeth","weekend"],"warewolve":false},
        {"events":["spaghetti","candy","television","work","touched tree"],"warewolve":false},
        {"events":["carrot","pudding","brushed teeth","work"],"warewolve":false},
        {"events":["lettuce","brushed teeth","work"],"warewolve":false},
        {"events":["carrot","ice cream","brushed teeth","cycling","work"],"warewolve":false},
        {"events":["pizza","brushed teeth","work"],"warewolve":false},
        {"events":["spaghetti","peanuts","exercise","weekend"],"warewolve":true},
        {"events":["bread","beer","computer","weekend","touched tree"],"warewolve":false},
        {"events":["brushed teeth","running","work"],"warewolve":false},
        {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"warewolve":false},
        {"events":["lasagna","brushed teeth","television","work"],"warewolve":false},
        {"events":["cauliflower","brushed teeth","running","work"],"warewolve":false},
        {"events":["carrot","brushed teeth","running","work"],"warewolve":false},
        {"events":["carrot","reading","weekend"],"warewolve":false},
        {"events":["carrot","peanuts","reading","weekend"],"warewolve":true},
        {"events":["potatoes","brushed teeth","running","work"],"warewolve":false},
        {"events":["lasagna","ice cream","work","touched tree"],"warewolve":false},
        {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"warewolve":false},
        {"events":["pizza","brushed teeth","running","work"],"warewolve":false},
        {"events":["lettuce","brushed teeth","work"],"warewolve":false},
        {"events":["bread","brushed teeth","television","weekend"],"warewolve":false},
        {"events":["cauliflower","peanuts","brushed teeth","weekend"],"warewolve":false}
    ]
    let allEvents = []
    let allEventCounter = {}
    //activity I'm looking for is the one with the most occurrence where warewolve is true!
    this.setAllEvents = () => {
        //return all events without duplicates
        activityMap.forEach(event => {
            if(event.warewolve){
                event.events.forEach(subEvent => {
                    if(!allEvents.includes(subEvent)){
                        allEvents.push(subEvent)
                    }
                })
            }
        })
    }

    this.setEventCounter = () => {
        //count the occurrence of each event that occurred only when wolf turned
        allEvents.forEach(event => {
            let counter = 0;
            activityMap.forEach(activityEvent => {
                if(activityEvent.warewolve){
                    activityEvent.events.forEach(subEvent => {
                        if(subEvent == event){
                            counter = counter + 1
                        }
                    })
                }
            })
            return allEventCounter[event] = counter
        })
    }

    this.getAllEvents = () => {
        return allEvents;
    }
    this.getAllEventCounter = () => {
        return allEventCounter;
    }
    this.getLikelyCause = () => {
        //return the highest occurring event
        let highest = 0
        Object.values(allEventCounter).forEach(count => {
            if(count > highest){
                highest = count
            }
        })
        const highestEvent = Object.keys(allEventCounter).filter(key => {
            return allEventCounter[key] == highest
        })
        return highestEvent;
    }
 
}
let newWolf = new Wolf()
newWolf.setAllEvents()
newWolf.setEventCounter()
console.log(newWolf.getAllEvents())
console.log(newWolf.getAllEventCounter())
console.log(newWolf.getLikelyCause())
