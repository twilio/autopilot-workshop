exports.handler = function(context, event, callback) {
 
 //point the human hand off task to this function
 
    let memory = JSON.parse(event.Memory)
    console.log(memory)
    let responseObject
    let actions = []
    let say
    let verb
 
    for (const attribute in event) {
        console.log(attribute + ", " + event[attribute]);
    }
 
    // set flag for sending to agent
    remember = {
        "remember": {
            "sendToAgent": true
        }
    }
 
    actions.push(remember);
 
    //define response options
    say = {
        "say": "Please wait while I connect you with the hotel concierge."
    }
 
    actions.push(say);
 
    responseObject = {
        "actions": actions
    }
 
    console.log(JSON.stringify(responseObject));
    callback(null, responseObject);
};
