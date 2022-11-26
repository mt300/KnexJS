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


// SELECT query

// database.select("id","name").table("products").then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e);
// })

// NESTED query

// database.insert({name:"one&ninenine",price:1.99}).into("products").then(data => {
//     database.select("id","price","name").table("products").then(data => {
//         console.log(data);
//     }).catch(e => {
//         console.log(e);
//     })
// }).catch(e => {
//     console.log(e);
// })


// WHERE clausule

// database.select("name", "price").whereRaw("id = 2 OR price > 4.0").table("products").then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e);
// })

// RAW method

// database.raw("SELECT * FROM products").then( data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e);
// })

// DELETE query

// database.where({id:4}).delete().table("products").then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e);
// })

// UPDATE query

// database.where({id:3}).update({price:9.99}).table("products").then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// })

// ORDERBY method

// database.select().orderBy("id","DESC").table("products").then(data=> {
//     console.log(data);
// }).catch(e=>{
//     console.log(e)
// });

