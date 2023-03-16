console.log("show 1st person  tickets");
console.log("show 2nd person  tickets");

const  bringWifeTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("tickets")
    },3000)
});
const getPopcorn=bringWifeTickets.then((t)=>{
// console.log(`person3:shows ${t}`)
console.log("husband:lets go in cinema hall")
console.log("wife : I am hungry");
return new Promise((resolve,reject)=> resolve(`${t} Popcorn`))
});

const getButter = getPopcorn.then((t)=>{
    console.log("husband:lets go in cinema hall")
    console.log("wife : I am done");
    return new Promise((resolve,reject)=> resolve(`${t} Butter`))
    });
getButter.then((t)=>console.log(t));

console.log("Person4 show tickets");

console.log("1st person show tickets");
console.log("2nd person show tickets");

const perMovie = async() =>{
    const bringWifeTickets = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("tickets")
        },3000)

    });
    let tickets = await bringWifeTickets;
    return tickets;
}
perMovie().then((m)=>console.log(m));