var database = require("./database");

var data = [{
    name: "Bob Marley's Hommies",
    price: 4.20
    },{
    name: "Big Fausto Adventures",
    price: 39.99
    }
]

// INSERT query

// database.insert(data).into("products").then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log("Error: " + e);
// });
