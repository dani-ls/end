var a=1;
// function add(){
//     console.log(2)
// }
function Person(name,age){
    this.name=name
    this.age=age
}
var person=new Person()
exports.a=a
console.log(a)
module.exports.a=a
// exports.add=add
module.exports={//推荐
    person:person
}
// exports.person=person  不推荐