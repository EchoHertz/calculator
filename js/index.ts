function typing(num:String) {
    let input = (<HTMLInputElement>document.getElementById('usrInput'))
    input.value += num
}

function clean() {
    (<HTMLInputElement>document.getElementById('usrInput')).value = ''
}

function calculate() {
    let input = (<HTMLInputElement>document.getElementById('usrInput'))
    if(input) {
        input.value = eval(input.value)
    }
}

function del() {
    let exp = (<HTMLInputElement>document.getElementById('usrInput'))
    exp.value = exp.value.substring(0, exp.value.length-1)
}
