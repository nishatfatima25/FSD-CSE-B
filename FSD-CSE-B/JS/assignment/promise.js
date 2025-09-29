function waitForTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

function login() {
    return waitForTwoSeconds().then(() => {
        console.log("login verified");
    });
}

function getData() {
    return waitForTwoSeconds().then(() => {
        console.log("data fetched");
    });
}

function displayData() {
    return waitForTwoSeconds().then(() => {
        console.log("data displayed");
    });
}

function attemptTest() {
    return waitForTwoSeconds().then(() => {
        console.log("test attempted");
    });
}

function logout() {
    return waitForTwoSeconds().then(() => {
        console.log("logout successfully");
    });
}

// Execution chain using Promises
login()
    .then(getData)
    .then(displayData)
    .then(attemptTest)
    .then(logout)
    .catch((err)=>{
        console.log('Error: ', err)
    })

    console.log("other application")