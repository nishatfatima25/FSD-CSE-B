
function waitForTwoSeconds(callback) {
    setTimeout(callback, 2000); 
}

function login(callback) {
    waitForTwoSeconds(() => {
        console.log("login verified");
        callback();
    });
}

function getData(callback) {
    waitForTwoSeconds(() => {
        console.log("data fetched");
        callback();
    });
}

function displayData(callback) {
    waitForTwoSeconds(() => {
        console.log("data displayed");
        callback();
    });
}

function attemptTest(callback) {
    waitForTwoSeconds(() => {
        console.log("test attempted");
        callback();
    });
}

function logout(callback) {
    waitForTwoSeconds(() => {
        console.log("logged out successfully");
        callback();
    });
}

// Execution chain using callbacks
login(() => {
    getData(() => {
        displayData(() => {
            attemptTest(() => {
                logout(() => {
                    console.log("other Application");
                });
            });
        });
    });
});
