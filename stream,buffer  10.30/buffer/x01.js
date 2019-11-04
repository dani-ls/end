//第一种定义buffer的方法
var buf=Buffer.from('acsii')
console.log(buf)
console.log(buf.toString())

//返回一个已初始化的数据，防止生成新的数据包含旧数据
var buf1=Buffer.alloc(10)
console.log(buf1)
//不安全 不推荐使用   未被初始化的buffer
var buf2=Buffer.allocUnsafe(10)
console.log(buf2)
// buffer的编码类型  utf8 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
//   ascii 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的  
// hex 将每个字节编码为两个十六进制字符
// base64 - Base64 编码
// 二进制（0b）八进制(0) 十六进制 (0x)
/**
 * buffer 和 cache区别
 * buffer 临时居住地 
 * cache 永久的
*/
