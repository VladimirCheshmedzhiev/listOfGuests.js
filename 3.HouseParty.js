function houseParty(array){

    let guestList = [];
    for (let i = 0; i < array.length; i++) {
        let guest = array[i].split(' ');
        if(!guest.includes("not")){
            if(guestList.includes(guest[0])){
                console.log(`${guest[0]} is already in the list!`);
            } else {
                guestList.push(guest[0]);
            }
        } else {
            if(guestList.includes(guest[0])){
                let result = guestList.indexOf(guest[0]);
                guestList.splice(result,1);
            } else{
                console.log(`${guest[0]} is not in the list!`)
            }
        }
    }
    console.log(guestList.join('\n'))
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])
console.log(`--------------------------`)
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)