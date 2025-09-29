function waitForTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function login() {
    await waitForTwoSeconds();
    console.log("verified login");
}

async function getData() {
    await waitForTwoSeconds();
    console.log("data fetched");
}

async function display() {
    await waitForTwoSeconds();
    console.log("data displayed");
}

async function attemptTest() {
    await waitForTwoSeconds();
    console.log("test attempted");
}

async function logout() {
    await waitForTwoSeconds();
    console.log("logout successfully");
}

// Execution chain using async/await
async function execute() {
    try {
        await login();
        await getData();
        await display();
        await attemptTest();
        await logout();
        console.log("other application");
    } catch (err) {
        console.log("Error:", err);
    }
}

execute();
