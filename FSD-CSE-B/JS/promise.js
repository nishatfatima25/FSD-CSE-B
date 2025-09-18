function waitForTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

function register() {
    return waitForTwoSeconds().then(() => {
        console.log("register end");
    });
}

function sendEmail() {
    return waitForTwoSeconds().then(() => {
        console.log("email end");
    });
}

function login() {
    return waitForTwoSeconds().then(() => {
        console.log("login end");
    });
}

function getData() {
    return waitForTwoSeconds().then(() => {
        console.log("data end");
    });
}

function displayData() {
    return waitForTwoSeconds().then(() => {
        console.log("Display end");
    });
}

// Execution chain using Promises
register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err)=>{
        console.log('Error: ', err)
    })

    console.log("other application")