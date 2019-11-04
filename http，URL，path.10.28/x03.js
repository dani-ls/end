//获取文件路径
var path = require('path')
// console.log(path)
// console.log(path.resolve('D:/北京翡翠/最后阶段/10.28','./aa'))
// console.log(path.normalize('D:/北京翡翠/最后阶段/10.28'))
// console.log(path.isAbsolute('D:/北京翡翠/最后阶段/10.28/'))//true  false
// console.log(path.join('/aa','/sss','//bb'))//把//bb转换为/bb  变为正确的路径
// console.log(path.dirname('D:/北京翡翠/最后阶段/10.28'))//
// console.log(path.basename('D:/北京翡翠/最后阶段/10.28'))//返回当前目录 10.28
// console.log(path.extname('D:/北京翡翠/最后阶段/10.28/1.txt'))//获取文件后缀名 .txt
// console.log(path.parse('D:/北京翡翠/最后阶段'))//
console.log(path.format({
    root: 'D:/',
    dir: 'D:/北京翡翠/最后阶段',
    base: '10.28',
    ext: '.28',
    name: '10'
}))

