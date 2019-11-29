export default {
  Write(text) {
    if (process.server) {
      console.log('Variable Test', text)
      const fs = require('fs')
      fs.writeFile('message.txt', this.test, function(err) {
        if (err) throw err
        console.log("It's saved!")
      })
    } else {
      console.info(text)
    }
  }
}
