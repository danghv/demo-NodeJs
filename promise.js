// function msgAfterTimeout (msg, who, timeout) {
//     let message = `${msg} Hello ${who}!`
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(console.log(message)), timeout)
//     })
// }
// msgAfterTimeout('first call', 'yourself', 1000)

function msgAfterTimeout (msg, who, timeout) {
    let message = `${msg} Hello ${who}!`
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
			resolve(`${msg} Hello ${who}!`)
		}, timeout)
    })
}



msgAfterTimeout("First Call, ", "Dang", 3000)
.then(
    function(outputof1){
        console.log(outputof1)
        return msgAfterTimeout(outputof1, 'Le', 2000)
    })
.then(
    function(outputof2){
        console.log(outputof2)
        return msgAfterTimeout(outputof2, 'Khue', 1000)
    })
.then(
    function(outputof3) {
        console.log('done: ' + outputof3)
    })
.catch(
    function(err){
        console.log('error: ', err)
    }
)




// function callback(data, err){
//     if(err) { console.log(err)}
//     console.log(data)
// }
// function msgAfterTimeout1 (msg, who, timeout, callback) {
//     setTimeout(function(){
//         callback(`${msg} Hello ${who}!`)
//     } , timeout)
// }

// msgAfterTimeout1("First Call, ", "Dang", 3000, (data, err)=>{
//     if(err){ console.log(err)}
//     console.log(data)
    
//     msgAfterTimeout1(data, 'Le', 2000,(data1, err) => {
//         if(err){ console.log(err)}
//         console.log(data1)
        
//         msgAfterTimeout1(data1, 'Khue', 1000,(data2, err) => {
//             if(err){ console.log(err)}
//             console.log(data2)
//         })
//     })

// })

