const url = "https://dummyjson.com/users?limit=2";

async function getUsers() {
  try {
    const res = await fetch(url);         
    const data = await res.json();      

    data.users.forEach((da) => {
      console.log("name:", da.firstName);
      console.log("email:", da.email);
      console.log("ip address:", da.ip);
      console.log("mac address:", da.macAddress);
      console.log("---x-----x-----x------x------x-----x-------")
    });
  } 
  catch (err) {
    console.log("Error:", err.message);
  }
}

getUsers();   
