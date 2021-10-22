let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
const CFonts  = require('cfonts')
function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'left',
    gradient: ['red', 'yellow']
  })
  let nkbot = spawn(process.argv[0], args, {stdio: ['inherit', 'inherit', 'inherit', 'ipc']}).on('mensaje', data => {console.log('[UwU]', data)}).on('error', e => {console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(teslagod)
}
start('teslagod.js')