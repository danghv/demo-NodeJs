
var personA = {
    name: 'mr A',
    showName: function() {
        console.log(this.name)
    }
}
var personB = {
    name: 'mr B',
    showName: function() {
        console.log(this.name)
    }
}
personA.showName() //mr A
personB.showName() //mr B
personA.showName.call(personA) // mr A
personA.showName.call(personB) //mr B
