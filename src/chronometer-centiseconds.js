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
  }, 10);
  }

  getMinutes() {
    
return Math.floor(this.currentTime/6000)
    
  }

  getSeconds() {
      return Math.floor(this.currentTime/100)%60
  }

  getCentiseconds(){
let centiSeconds=this.currentTime%100;
//console.log(centiSeconds)
return centiSeconds
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
    let centiSeconds=this.computeTwoDigitNumber(this.getCentiseconds())
    //let centiSeconds=this.getCentiseconds
    console.log(`${minutes}:${seconds}:${centiSeconds}`)
    return `${minutes}:${seconds}.${centiSeconds}`

  }

}
