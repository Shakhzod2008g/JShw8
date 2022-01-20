const google= {
    a: 100,
    b: 200,
    c: "My name is Sahzod",
    d: 300,
    e: 400,
    f: "I am 13 years old",
    g: 500,
    h: 600,
    i: "My weight is 40kg",
    j: "My hobby is football and basketball",
    k: 700,
    l: 800,
};

console.log(google);

function youtube(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}

youtube(google);

console.log(google);

const number = {
    a: 100,
    b: 200,
    c: "My name is Sahzod",
    d: 300,
    e: 400,
    f: "I am 13 years old",
    g: 500,
    h: 600,
    i: "My weight is 40kg",
    j: "My hobby is football and basketball",
    k: 700,
    l: 800,
}

let sum = 0;

for (let key in number) {
    if (typeof number[key] == 'number') {
        sum += number[key];
    }
};

console.log(sum);