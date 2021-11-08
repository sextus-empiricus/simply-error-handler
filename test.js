const obj = {
    user1: {
        name: 'Sekstus',
        // message: 'Sekstus message'
    },
    user2: {
        name: 'Marcus',
        message: 'Marcus message'
    },
    user3: {
        name: 'Anaksagoras',
        message: 'Anaksagoras message'
    },
}


const x = Object.values(obj).map(el => el.message);
console.log(x)
