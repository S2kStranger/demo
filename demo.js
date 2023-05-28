console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async () => {

    const promiseWifeBringingTicks=new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn=new Promise((resolve,reject) => resolve('popcorn'));

    const addButter=new Promise((resolve,reject) => resolve('butter'));

    const getColdrink=new Promise((resolve,reject) => resolve('coldrinks'));
    
     let tick=await promiseWifeBringingTicks;

    console.log(`Wife: I've the ${tick}`);
    console.log("Husband: We should go in");
    console.log("Wife: No, I'm hungry");

    let popcorn=await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`);
    console.log("Husband: Should we go in? ");
    console.log("Wife: No, I need butter on my popcorn");

    let butter=await addButter;
    console.log(`Husband: I got some ${butter} on popcorn`);
    console.log("Husband: Anything else? ");
    console.log("Wife: yes, we forgot the coldrinks");
    console.log("Thanks for reminder!");

    let coldrink=await getColdrink;

    console.log(`Husband: got you 2 ${coldrink}`);
    console.log("Husband: Anything else?");
    console.log("Wife: No, We are agetting late! let's go.");
    console.log("Husband: Let's enjoy now.");

    return tick;
}

preMovie().then((data) => console.log(`Person 3 shows ${data}`));




console.log('person4: shows ticket');
console.log('person5: shows ticket');