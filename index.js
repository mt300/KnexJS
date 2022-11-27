var database = require("./database");

var data = [{
    name: "Bob Marley's Hommies",
    price: 4.20,
    studio: 1
    },{
    name: "Big Fausto Adventures",
    price: 39.99,
    studio:3
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

// database.where({id:3}).delete().table("products").then(data => {
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

// database.insert({
//     name: "Rick & Morty",
//     studio: 2,
//     price: 137.13
// }).table("products").then(data => {
//     console.log(data);
// }).catch(e=> {
//     console.log(e)
// })


// INNNER JOIN 1 p 1, Only show in select if item has realation with other table (Foreign Key)


// database.select(["studios.id","products.id as prod_id", "studios.name as studio_name", "products.name as prod_name"]).table("studios").innerJoin("products","products.studio","studios.id").then(data=>{
//     console.log(data);
// }).catch(e=>{
//     console.log(e)
// })

// INNER JOIN 1 p 1 with WHERE

// database.select([ "products.*","studios.name as studio_name"]).table("studios").innerJoin("products","products.studio","studios.id").where("products.id",9).then(data=>{
//     console.log(data);
// }).catch(e=>{
//     console.log(e)
// })


// RELATION 1pN


// database.select([ "studios.*","products.name as products"]).table("studios").innerJoin("products","products.studio","studios.id").then(data=>{
//     var studios = data;
//     var studio ={
//         id: 0,
//         name: "",
//         products:[]
//     }
//     studio.id = data[2].id;
//     studio.name = data[2].name;
//     data.forEach(element => {
//         if(element.id == studio.id){
//             studio.products.push({name:element.products})
//         }

//     });
//     console.log(studio)
// }).catch(e=>{
//     console.log(e)
// })
