//closure is a anonymous self-invoking function?

(() => {
    let name = 'Mr D'
    
    
    return function() {
        
        console.log(name)
    }
})()