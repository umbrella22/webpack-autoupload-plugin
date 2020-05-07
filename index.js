const client = require('scp2')
const chalk = require("chalk")

class WebpackAutoUploadPlugin {
    constructor(options) {
        this.options = {
            port: 22
        }
        Object.assign(this.options, options)

        if (!this.options.ip || !this.options.src || !this.options.dist || !this.options.user || !this.options.password) {
            console.error(`${chalk.bgRed.white(" [webpack-AutoUpload-plugin] ") + ' ' + chalk.red('ERROR: Check for empty values for incoming objects. \n')} `)
            process.exit(1)
        }
    }
    apply(compiler) {
        const options = this.options
        compiler.hooks.done.tap('done', () => {

            const remote = `${options.user}:${options.password}@${options.ip}:${options.port}:${options.dist}`

            console.log(`${chalk.bgBlue.white(" [webpack-AutoUpload-plugin] ") + ' ' + chalk.cyan("INFO: Start Upload...")}`)
            client.scp(options.src, remote, (err) => {
                if (err) {
                    console.log(`${chalk.bgRed.white(" [webpack-AutoUpload-plugin] ") + ' ' + chalk.red("ERROR: Upload faild!")} ` + err.message)
                } else {
                    console.log(`${chalk.bgGreen.white(" [webpack-AutoUpload-plugin] ") + ' ' + chalk.green('SUCCESS: Upload Success!')}`)
                }
            })
        })
    }
}

module.exports = WebpackAutoUploadPlugin
