function msgAfterTimeout (msg, who, timeout) { 
            
            return msg + ' Hello ' + who
}
setTimeout(
    console.log msgAfterTimeout('', 'Dang')
        setTimeout(
            msgAfterTimeout(msg, 'Hai')
        , 2000)
, 3000)

