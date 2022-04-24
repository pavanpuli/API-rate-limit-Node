const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let timer = 0;
let count = 0;
function millisecondsToTime(milli){
    var minutes = Math.floor((milli / (60 * 1000)) % 60);
    return minutes;
}
app.get('/', function async(req, res) {
    if(count < 10 && count >= 1) {
        count = count + 1;
        return res.send({message : `you are making  valued requests, request remaining for a minutes is ${10-count+1}` })
    }
    else if(count === 10) {
        let ctimer = new Date()
        if(millisecondsToTime(ctimer) - millisecondsToTime(timer) >= 1){
            count = 1;
            timer = ctimer;
        }
        return res.send({message: 'You sent too many requests. Please wait a while then try again'})
    }
    else {
        let ctimer = new Date()
        timer = ctimer
        count = 1;
        return res.send({message : `you are making  valued requests, request remaining for a minutes is ${10-count+1}` })
    }
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});