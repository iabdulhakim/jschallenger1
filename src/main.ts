

// function myFunction(a:string, b:string) : string {
//   let result: string = "";

//   if (a.includes(b)) {
//     result = b + a;
//   } else {
//     result = a + b;
//   }
// }


// ! HOMEWORK

// 1
// function myFunction(a:number, b:number) {
// return console.log(a+b);
// }
// myFunction(2,3);


// 2
// function myFunction(a: number | string, b: number | string) {
//     if(a == b) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// myFunction(4,"4");


// 3
// function myFunction(a:any) {
//     return console.log(typeof(a));
// }
// myFunction(7);


// 4
// function myFunction(a: string, n: number) {
//     return console.log(a.charAt(n - 1));
// }
// myFunction("salom", 1);


// 5
// function myFunction(a:string) {
//     return console.log(a.substring(3));
// }
// myFunction("abcdefg");


// 6
// function myFunction(str: string) {
//     return console.log(str.slice(-3));
// }
// myFunction("abcdefg");


// 7
// function myFunction(a: string) {
//     return console.log(a.slice(0, 3))
// }
// myFunction("abcdefg");


// 8
// function myFunction(a: string) {
//     return console.log(a.indexOf("is"));
// }
// myFunction("praise");


// 9
// function myFunction(a: any) {
//     return console.log(a.slice(a.length/ 2));
// }
// myFunction("abcdefgh");


// 10
// function myFunction(a: string) {
//     return console.log(a.slice(0, -2));
// }
// myFunction("abcdfg");


// 11
// function myFunction(a: number, percentage: number) {
//     return console.log(a * percentage / 100);
// }
// myFunction(100, 50)


// 12
// function myFunction(a: number, b: number, c: number, d: number, e: number, f: number) {
//     return console.log(((a + b - c) * d / e) ** f);
//   }
// myFunction(6,5,4,3,2,1);


// 13
// function myFunction(a: string, b: string) {
//     return console.log(a.includes(b) ? b + a : a + b);
// }
// myFunction("cheese", "cake");


// 14
// function myFunction(a: number) {
//     if (a % 2) {
//         console.log(false)
//     } else {
//         console.log(true)
//     }
// }
// myFunction(4)


// 17
// function myFunction(a: number, b: number) {
//     if (a < b) {
//         console.log(a / b)
//     } else {
//         console.log(a * b)
//     }
// }
// myFunction(10, 100);


// 18
// function myFunction(a: number) {
//     return console.log(a.toFixed(2))
// }
// myFunction(3.136)


// ! Arrays

// 1
// function myFunction(a:number[], n: number) {
//   return console.log(a.filter((_, index) => !((index + 1) % n)));
// }
// myFunction([10,9,8,7,6],5);


// 2
// function myFunction(a: number[]) {
//     return console.log(a.slice(3));
// }
// myFunction([1,2,3,4])


// 3
// function myFunction(a: number[]) {
//     return console.log(a.slice(-3))
//   }
// myFunction([1,2,3,4])


// 4
// function myFunction(a: number[]) {
//     return console.log(a.slice(0, 3))
//   }
// myFunction([1,2,3,4]);


// 5
// function myFunction(a: number[], n: number) {
//     return console.log(a.slice(-n))
// }
// myFunction([1, 2, 3, 4, 5], 2)  ;


// 6
// function myFunction(a: any[], b:any) {
//     return console.log(a.filter(a => a !== b))
// }
// myFunction([false,'2',1], false);


// 7
// function myFunction(a: number[]) {
//     return console.log(a.length);
// }
// myFunction([1,2,3,4,5])


// 8
// function myFunction(a: number[]) {
//     return console.log(a.filter(num => num < 0).length)
// }
// myFunction([4,-3,2,1,0]);


// 9
// function myFunction(a: string[]) {
//     return console.log(a.sort())
// }
// myFunction(['b', 'c', 'd', 'a']);


// 10
// function myFunction(arr: number[]) {
//     return console.log(arr.sort((a, b) => b - a))
// }
// myFunction([4,2,3,1])  


// 13
// function myFunction(arr:any[]) {
//     return console.log(arr.every((v) => v === arr[0]))
// }
// myFunction(['test', 'test', 'test']);


// 14
// function myFunction(...arrays: any []) {
//     return console.log(arrays.flat())
// }
// myFunction([true, true], [1, 2], ['a', 'b']);



// ! Object 

// 1 
// function myFunction(obj: any) {
//     return console.log(obj.country)
// }
// myFunction({ country: 'Sweden', continent: 'Europe' });


// 2
// function myFunction(obj: any) {
//     return console.log(obj['prop-2'])
// }
// myFunction({  one: 1,  'prop-2': 2})


// 3
// function myFunction(obj: any, key: string) {
//     return console.log(obj[key])
// }
// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent');  


// 4
// function myFunction(a: any, b: string) {
//     return console.log(b in a)
// }
// myFunction({a:1,b:2,c:3},'b');


// 5
// function myFunction(a: any, b: string) {
//     return console.log(!!a[b])
// }
// myFunction({a:1,b:2,c:3},'b');


// 9
// function myFunction(a: any) {
//     return console.log(Object.keys(a))
// }
// myFunction({a:1,b:2,c:3}); 


// 13
// function myFunction(obj1: any, obj2: any) {
//     const { country, ...restObj2 } = obj2;
//     return console.log({...obj1, ...restObj2, city: country})
// }
// myFunction({ a: 5, b: 4 }, { c: 3, d: 1, e: 2 })




// ! Dates 

// 1
// function myFunction(a: any, b: any) {
//     return console.log(a.getTime() === b.getTime())
// }
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'));  