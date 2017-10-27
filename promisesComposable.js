function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
Promise.all([
    msgAfterTimeout("First Call, ", "Dang", 3000),
    console.log(msgAfterTimeout("First Call, ", "Dang", 3000)),
    msgAfterTimeout(msgAfterTimeout("First Call, ", "Dang", 3000), "Le", 2000).then()
    console.log(msgAfterTimeout(msgAfterTimeout("First Call, ", "Dang", 3000), "Le", 2000)),
    msgAfterTimeout(msgAfterTimeout(msgAfterTimeout("First Call, ", "Dang", 3000), "Le", 2000), "Khue", 1000),
    console.log(msgAfterTimeout(msgAfterTimeout(msgAfterTimeout("First Call, ", "Dang", 3000), "Le", 2000), "Khue", 1000)),
    
]).then((msgs) => {
    msgs.forEach((msg) => {
        console.log(msg)
    })
})
// .catch((err) => {
//     console.log(err)
// })