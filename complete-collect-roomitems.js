exports.handler = function(context, event, callback) {
    
    const memory = JSON.parse(event.Memory)
   
    /* parse data collected from user */
    const collected_answers = memory.twilio.collected_data.quantity_of_item.answers
    console.log(collected_answers)
    let order_quantity = collected_answers.quantity.answer
    
    let actions = []
    let say
    let listen
    
    /*response*/
    
    say = {
       "say":"Thanks, your "+order_quantity+" items will be dropped off within 10 minutes. What else can I help with?"
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
