// let name = 'just a name'

// let girl = {
//     name: 'Ngoc Trinh',
//     getName: function() {
//         return this.name
//     }
// }

// console.log(girl.getName())


let name = 'just a name'

let girl = {
    name: 'Ngoc Trinh',
    getName: function() {
        return this.name
    },
    baby1: {
        name: 'Ngoc Hai',
        getBaby1: function() {
            return this.name
            // let temp = girl.getName.call(girl.herBaby)
            // return temp
        }
    },
    baby2: {
        name: 'Ngoc Linh',
        getBaby2: function() {
            return this.name
        }
    }
}
// console.log(girl.getName())
// console.log((girl.herAnotherBaby))
console.log(girl.getName.apply(girl.herAnotherBaby))
// let checkbind = girl.herAnotherBaby.getAnotherHerBaby.bind(girl.herBaby)
// console.log(checkbind())
