// ### 1. `forEach`

// 1. Berilgan raqamlar massivida har bir elementni 2 ga ko'paytirib yangi massiv hosil qilmasdan ekranga chiqaring.

// function multiplyByTwo(arr) {
//     arr.forEach(value => {
//         value = value * 2;
//         console.log(value)
//     })
// }

// console.log(multiplyByTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 2. Berilgan sonlar massivida har bir juft sonni 3 ga ko'paytiring va yangi massiv hosil qilmasdan natijani ekranga chiqaring.

// function multiplyByThree(arr) {
//     arr.forEach(value => {
//         if (value % 2 == 0) {
//             value = value * 3;
//         }
//         console.log(value);
//     })
// }

// console.log(multiplyByThree([1, 2, 3, 4, 5]))

// 3. Talabalar ballari ro'yxatida har bir ball uchun uning imtihondan o'tgan yoki o'tmaganligini tekshirib, ekranga chiqaring (o'tish balli: 50).

// function checkForExam(arr) {
//     let text;
//     arr.forEach(value => {
//         if (value >= 50) {
//             text = `Ball: ${value}. Imtihondan o'tdi`;
//         } else {
//             text = `Ball: ${value}. Imtihondan o'ta olmadi`;
//         }
//         console.log(text);
//     })
// }

// checkForExam([51, 50, 49, 48, 47]);

// 4. Berilgan massivdan har bir musbat son uchun "musbat" va manfiy son uchun "manfiy" so'zlarini ekranga chiqaring.

// function NegativeOrPositive(arr) {
//     let text;
//     arr.forEach(value => {
//         if (value > 0) {
//             text = `${value} musbat son.`;
//         } else {
//             text = `${value} manfiy son.`;
//         }
//         console.log(text);
//     })
// }

// NegativeOrPositive([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]);

// 5. Kitoblar nomlari massivida har bir kitob nomi uzunligini ekranga chiqaring.

// function lengthOfBooks(arr) {
//     let bookLength = 0;
//     arr.forEach(value => {
//         bookLength = value.length;
//         console.log(`Book ${value} consists of ${bookLength} letters`);
//     })
// }

// lengthOfBooks(['Avaz Ohun', "Ikki eshik orasi", "Rabg'uziy"])

// ---

// ### 2. `map`

// 1. Berilgan sonlar massividagi har bir elementga 5 qo'shib yangi massiv hosil qiling.

// function addFive(arr) {
//     let newArray = [];
//     arr.map(value => {
//         value = value + 5;
//         newArray.push(value);
//     })
//     return newArray;
// }

// console.log(addFive([1, 2, 3, 4, 5]));

// 2. Raqamlar massividagi har bir sonning kvadratini hisoblab yangi massiv qaytaring.

// function calculateSqrt(arr) {
//     let newArray = [];
//     arr.map(value => {
//         value = value ** 2;
//         newArray.push(value);
//     })
//     return newArray;
// }

// console.log(calculateSqrt([1, 2, 3, 4, 5]));

// 3. Talabalar ismlarining birinchi harfini katta qilib, yangi massiv hosil qiling.

// function capitalizeFirstLetter(arr) {
//     let newArray = [];
//     arr.map(value => {
//         value = value[0].toUpperCase() + value.slice(1);
//         newArray.push(value);
//     })
//     return newArray;
// }

// console.log(capitalizeFirstLetter(['azizbek', 'lazizbek', 'otabek', 'islomjon', 'muhammadbilol']));

// 4. Har bir satr uzunligi berilgan matnlar massividan uzunliklar massivini qaytaring.

// function lengthOfStringArray(arr) {
//     let newArr = [];
//     arr.map(value => {
//         value = value.split(" ").join("");
//         value = value.length;
//         newArr.push(value);
//     })
//     return newArr;
// }

// console.log(lengthOfStringArray(["Assalomu aleykum", 'Vaaleyum assalom', 'Hello world!']));

// 5. Har bir mahsulot narxiga 20% qo'shib, yangi narxlar massivini hosil qiling.

// function plus20percent(arr) {
//     let newArray = [];
//     arr.map(value => {
//         value = value + (value * .2);
//         newArray.push(value);
//     })
//     return newArray;
// }

// console.log(plus20percent([100, 120, 130, 140, 150, 160, 170, 180, 190, 200]));

// ---

// ### 3. `some`

// 1. Berilgan sonlar massivida 0 dan katta sonlar bor-yo'qligini tekshiring.

// function checkForOverZero(arr) {
//     let res = arr.some(value => {
//         return value > 0;
//     })
//     return res;
// }

// console.log(checkForOverZero([-5, 1, -4, 2, -3]));

// 2. Talabalar ballari ro'yxatida imtihondan o'tgan (50 dan yuqori ball olgan) talabalar bor-yo'qligini tekshiring.

// function checkForStdOver50(arr) {
//     let res = arr.some(value => {
//         return value >= 50;
//     })
//     return res;
// }

// console.log(checkForStdOver50([49, 50, 48, 51, 47, 52]));

// 3. Mahsulotlar ro'yxatida 100 dan qimmat mahsulot bor-yo'qligini aniqlang.

// function checkForPreciousCommodity(arr) {
//     let res = arr.some(value => {
//         return value > 100;
//     })
//     return res;
// }

// console.log(checkForPreciousCommodity([100, 101, 1002, 103, 104, 105]));

// 4. Berilgan butun sonlar massivida juft son bor-yo'qligini aniqlang.

// function checkForEvenNumber(arr) {
//     let res = arr.some(value => {
//         return value % 2 == 0;
//     })
//     return res;
// }

// console.log(checkForEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5. Yil fasllari ro'yxatida "Bahor" fasli bor-yo'qligini tekshiring.

// function checkForSpring(arr) {
//     let res = arr.some(value => {
//         value = value[0].toUpperCase() + value.slice(1);
//         return value == "Bahor";
//     })
//     return res;
// }

// console.log(checkForSpring(['qish', "Qish", 'bahor', "Bahor", 'yoz', "Yoz", 'kuz', "Kuz"]));


// ---

// ### 4. `every`

// 1. Berilgan sonlar massividagi barcha elementlar musbat ekanligini tekshiring.

// function checkForEvenNumber(arr) {
//     let res = arr.every(value => {
//         return value > 0;
//     })
//     return res;
// }

// console.log(checkForEvenNumber([-1, 2, -3, 4, -5]));

// 2. Talabalar ballari ro'yxatidagi barcha ballar 50 dan yuqori ekanligini tekshiring.

// function checkForOver50(arr) {
//     let res = arr.every(value => {
//         return value >= 50;
//     })
//     return res;
// }

// console.log(checkForOver50([48, 49, 50, 51, 52]));

// 3. Mahsulotlar ro'yxatidagi barcha mahsulotlar narxi 100 dan kichik ekanligini aniqlang.

// function checkForUnder100(arr) {
//     let res = arr.every(value => {
//         return value < 100;
//     })
//     return res;
// }

// console.log(checkForUnder100([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

// 4. Berilgan massivdagi barcha raqamlar juft ekanligini tekshiring.

// function checkForEvenNumbers(arr) {
//     let res = arr.every(value => {
//         return value % 2 == 0;
//     })
//     return res;    
// }

// console.log(checkForEvenNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10]));

// 5. Talabalar ismlarining barcha elementlari "A" harfi bilan boshlanishini tekshiring.

// function checkForCapitalA(arr) {
//     let res = arr.every(value => {
//         return value[0] == "A";
//     })

//     return res;
// }

// console.log(checkForCapitalA(['Azizbek', 'Cap', 'Kevin', "Blah"]));

// ---

// ### 5. `find / findIndex`

// 1. Berilgan sonlar massivida 100 dan katta birinchi elementni toping.

// function findNumberOver100(arr) {
//     let res = arr.find(value => {
//         return value > 100;
//     })
//     console.log(res);
// }

// findNumberOver100([1, 2, 3, 4, 5, 100, 101]);

// 2. Talabalar ballari ro'yxatida imtihondan o'tgan birinchi talabani toping (50 dan yuqori ball olgan).

// function findMoreThan50Student(arr) {
//     let res = arr.find(value => {
//         return value > 50;
//     })

//     console.log(res);
// }

// findMoreThan50Student([10, 20, 30, 40, 50, 60, 70]);

// 3. Mahsulotlar ro'yxatida narxi 200 dan oshgan birinchi mahsulotning indeksini toping.

// function findElementOver200(arr) {
//     let res = arr.findIndex(value => {
//         return value > 200;
//     })
//     console.log(res);
// }

// findElementOver200([2001, 2002, 2003, 2004, 2005]);

// 4. Berilgan sonlar massivida 0 dan kichik birinchi sonni toping.

// function findNumberUnderZero(arr) {
//     let res = arr.find(value => {
//         return value < 0;
//     })
//     console.log(res);
// }

// findNumberUnderZero([5, 4, 3, 2, 1, -1, -2, -3, -4, -5]);

// 5. Yil fasllari ro'yxatida "Yoz" faslini toping va indeksini aniqlang.

// function findIndexOfSummer(arr) {
//     let res = arr.findIndex(value => {
//         return value == "Yoz"
//     })

//     console.log(res);
// }

// findIndexOfSummer(["Yoz", "Bahor", "Qish", "Kuz"]);


// ---

// ### 6. `filter`

// 1. Berilgan sonlar massivida faqat manfiy sonlarni ajratib yangi massiv qaytaring.

// function OnlyNegative(arr) {
//     let newArray = [];
//     arr.filter(value => {
//         if (value < 0) {
//             newArray.push(value);
//         }
//     })
//     return newArray;
// }

// console.log(OnlyNegative([-1, -2, -3, -4, -5, 1, 2, 3, 4, 5]));

// 2. Talabalar ballari ro'yxatida faqat imtihondan o'tgan talabalarni ajratib yangi massiv hosil qiling (o'tish balli: 50).

// function checkForExam(arr) {
//     let newArray = [];
//     arr.filter(value => {
//         if (value >= 50) {
//             newArray.push(value);
//         }
//     })
//     return newArray;
// }

// console.log(checkForExam([49, 50, 51, 52, 53]));

// 3. Mahsulotlar ro'yxatida 100 dan arzon mahsulotlarni ajratib yangi massiv qaytaring.

// function commodityUnder100(arr) {
//     let newArray = [];
//     arr.filter(value => {
//         if (value < 100) {
//             newArray.push(value);
//         }
//     })
//     return newArray;
// }

// console.log(commodityUnder100([1, 203, 40, 200, 100, 34]));

// 4. Berilgan massivdagi faqat toq sonlarni ajratib yangi massiv hosil qiling.

// function onlyOddArray(arr) {
//     let newArray = [];
//     arr.filter(value => {
//         if (value % 2 == 1) {
//             newArray.push(value);
//         } 
//     })
//     return newArray;
// }

// console.log(onlyOddArray([1, 2, 3, 4, 5]));

// 5. Ismlar ro'yxatida faqat "A" harfi bilan boshlanadigan ismlarni ajratib yangi massiv hosil qiling.

// function onlyCapitalAarray(arr) {
//     let newArray = [];
//     arr.filter(value => {
//         value = value[0].toUpperCase() + value.slice(1);
//         if (value[0] == 'A') {
//             newArray.push(value);
//         }
//     })
//     return newArray;
// }
// console.log(onlyCapitalAarray(["Alisa", "Amane", "Agony"]));