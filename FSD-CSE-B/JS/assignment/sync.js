function login(){
    wait()
    console.log('login verified')
}

function getData(){
    wait()
    console.log('data fetched')
}

function display(){
    
    console.log('data displayed')
}

function attemptTest(){
    wait()
    console.log('test attempted')
}

function logout(){
    wait()
    console.log('logged out successfully')
}

function wait(){
    const ms = new Date().getTime()+2000
    while(new Date().getTime() < ms){}
}

login()
getData()
display()
attemptTest()
logout()
console.log('other')