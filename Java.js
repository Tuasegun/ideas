let data = [
{
principal: 2500,
time: 1.8,
},
{
principal:1000,
time: 5,
},
{
principal: 3000,
 time: 1,
},
{
    principal: 2000,
    time : 3,
}
];
let datum = data.length;
let rate;

const calcInterest = (data) => {
    return (data.principal, data.time, data.rate)/100;
}

data.forEach(function(data, i){
    if (data.principal >= 2500 && (data.time > 1 && data.time < 3)){
        rate = 3;
    }
    else if (data >= 2500 && data.time >= 3) {
        rate = 4;
    }
    else if (data.principal >= 2500 || data.time <= 1){
        rate = 2;
    }
    else {
        rate = 1;
    }
    data.rate =rate;
    const interest = calcInterest(data)
    console.log('Interest for object ${i + 1}:-', interest);
})



