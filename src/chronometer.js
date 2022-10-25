class Chronometer {
  constructor() {
this.currentTime=0;
this.intervalId=null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    this.currentTime++
    if(printTimeCallback){
      printTimeCallback()
    }
  }, 1000);
  }

  getMinutes() {
    
return Math.floor(this.currentTime/60)
    
  }

  getSeconds() {
    if(this.currentTime<60){
      return this.currentTime
    }
    if(this.currentTime>=60){
      return this.currentTime%60
    }
  }

  computeTwoDigitNumber(value) {
// if((''+value).length<2){
//   return '0'+value
// }
// return ''+value
return ('0'+value).slice(-2)
// return String(value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
  this.currentTime=0
  }

  split() {
    let minutes=this.computeTwoDigitNumber(this.getMinutes())
    let seconds=this.computeTwoDigitNumber(this.getSeconds())
    console.log(minutes,seconds)
    return `${minutes}:${seconds}`

  }

  

}
