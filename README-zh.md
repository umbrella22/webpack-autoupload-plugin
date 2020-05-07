*提示:*  此插件要求node版本大于等于8

## 自动上传打包完成的webpack插件

在很多时候，我们打包完成前端代码以后，都要自己手动去上传到服务器的对应文件目录，在我工作的时候，觉得这样的操作非常浪费时间；借助node-scp2，能够在webpack打包完成以后，自动将文件上传到对应的文件目录，解放双手岂不美哉？

 > 需要注意的是，在windows操作系统的服务器中，您需要安装open-ssh并正确配置它才可以使用本插件。

```JavaScript
// 使用方法
const AutoUploadPlugin = require("webpack-autoupload-plugin")

plugins:[
    new AutoUploadPlugin({
        ip: '',
        user: '',
        password: '',
        src: '',
        dist: ''
    })
]
```
参数说明:

参数|类型|说明
--|:--:|--
ip|String|您的服务器ip
user|String|您的服务器登录用户名
password|String|您的服务器登录密码
src|String|需要上传的文件夹路径
dist|String|服务器中的文件夹路径

> 不必担心插件会窃取您的服务器账号和密码，该插件已经开源。
