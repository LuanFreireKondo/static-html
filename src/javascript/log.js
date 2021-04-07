(function (global) {
  var Kondo = function (name) {
    return new Kondo.init(name)
  }

  var defaultColor = '#555555'

  Kondo.prototype = {
    color: defaultColor,

    log: function (log) {
      if (console) {
        console.log('%c ----- L O G -----', `color: ${this.color}`)
        console.log(log)
        console.log('%c ----- L O G -----', `color: ${this.color}`)
        console.log('\n')
      }
    },

    setColor: function (color) {
      this.color = color
    }
  }

  Kondo.init = function () {
    this.color = this.color
  }

  Kondo.init.prototype = Kondo.prototype

  global.kondo = Kondo
}(window))