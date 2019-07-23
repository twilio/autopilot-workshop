exports.handler = function(context, event, callback) {
    
    const memory = JSON.parse(event.Memory)
   
    /* parse data collected from user */
    const collected_answers = memory.twilio.collected_data.order_food.answers
    console.log(collected_answers)
    let order = collected_answers.Food.answer
    let special_requests = collected_answers.special_requests.answer
    
    let actions = []
    let say
    let listen
    
    /*response*/
    
    say = {
       "say":"Thanks, your order for "+order+" with "+special_requests+" will take about 45 minutes. What else can I help with?"
    }
    
    /*add listen to keep dialog alive*/
    
    listen = {
        "listen":true
    }
    
    /*construct response JSON*/
    
    actions.push(say);
    actions.push(listen);
    responseObject = {
    	"actions": actions
    };
            
    callback(null, responseObject)
}
