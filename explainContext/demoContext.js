
var personA = {
    firstName: 'Nguyen Hong ',
    lastName: 'Hai',
    showName: function() {
        console.log(personA.firstName + personA.lastName)
    }
}
var personB = {
    firstName: 'Chi ',
    lastName: 'Pheo',
    showYourName: function(a, b) {
        console.log(this.firstName + this.lastName + a + b)
    }
}



personB.showYourName.call({ 
    a: 1,
    b: 2,
    firstName1: 'Nguyen ',
    c: 'Ti',
    lastName: 'Teo',
    methodA: function(){
        console.log('Display me!')
    }, 


}, ' test1') // Nguyen Teo
