// const x = 20
// console.log(a);
// let e = 10;
// var a;
// var b = 6;
// console.log(a);

// {
//     var c = 7;
//     let d = 9;
//     console.log(b);
//     console.log(c);
//     console.log(e);
//     x++;
// }

// console.log(c);
// console.log(d);
// console.log(x);

// function f1(user ="guest"){
//     console.log(`hello ${user}`);
// }

// f1("nishat")

// call back

// function fun (user="nishat", function login()){
//     console.log(`hello ${user}`);
//     login();
// }

// function login(){
//     console.log("this is login");
// }

// fun();

// synchronous

// function waitfortwoseconds()
// {
//     const ms=new Date().getTime()+8000;
//     while(new Date().getTime()<ms);
// }
// function register()
// {
//     waitfortwoseconds();
//     console.log("register end");
// }
// function sendemail()
// {
//     waitfortwoseconds();
//     console.log("email end");
// }
// function login()
// {
//     waitfortwoseconds();
//     console.log(" login end");
// }
// function getData()
// {
//     waitfortwoseconds();
//     console.log("data end");
// }
// function displayData()
// {
//     waitfortwoseconds();
//     console.log("Display end");
// }
// register();
// sendemail();
// login();
// getData();
// displayData();
// console.log("other Application")

// asynchronous

function waitForTwoSeconds(callback) {
    setTimeout(callback, 2000); 
}

function register(callback) {
    waitForTwoSeconds(() => {
        console.log("register end");
        callback();
    });
}

function sendEmail(callback) {
    waitForTwoSeconds(() => {
        console.log("email end");
        callback();
    });
}

function login(callback) {
    waitForTwoSeconds(() => {
        console.log("login end");
        callback();
    });
}

function getData(callback) {
    waitForTwoSeconds(() => {
        console.log("data end");
        callback();
    });
}

function displayData(callback) {
    waitForTwoSeconds(() => {
        console.log("Display end");
        callback();
    });
}

// Execution chain using callbacks
register(() => {
    sendEmail(() => {
        login(() => {
            getData(() => {
                displayData(() => {
                    console.log("other Application");
                });
            });
        });
    });
});


function register(){
    wait()
    console.log('reg end')
}

function sentEmail(){
    wait()
    console.log('email send end')
}
function login(){
    wait()
    console.log('login end')
}

function getData(){
    wait()
    console.log('data fetched')
}

function display(){
    
    console.log('display data end')
}

function wait(){
    const ms = new Date().getTime()+2000
    while(new Date().getTime() < ms){}
}

register()
sentEmail()
login()
getData()
display()
console.log('other')