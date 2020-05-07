*Note:* Only work above node 8

## Automatically upload packaged files Webpack Plugin

In many cases, we have to manually upload the corresponding file directory to the server after packaging the front-end code. When I was working, I felt that such operation was a waste of time.
Wouldn't it be nice to have node-scp2 to automatically upload files to the corresponding file directory after webpack is packaged?

> Note that in a Windows operating system server, you need to install open-ssh and configure it correctly to use the plug-in.

```JavaScript
// method of application
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

parameter specification:

argument|type|explain
--|:--:|--
ip|String|Your server IP
user|String|Your server login username
password|String|Your server login password
src|String|The folder path that needs to be uploaded
dist|String|Folder path in the server

> Don't worry about the plug-in stealing your server account and password, the plug-in is open source.