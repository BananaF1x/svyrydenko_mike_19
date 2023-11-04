// 1
document.write("<br> Вивести на сторінку в один рядок через кому числа від 10 до 20. <br>");
for (let i = 10; i <= 20; i++) {
    document.write(i + ", ");
}

// 2
document.write("<br> Вивести квадрати чисел від 10 до 20. <br>");
for (let i = 10; i <= 20; i++) {
    document.write(i**2 + ", ");
}

// 3
document.write("<br> Вивести таблицю множення на 7. <br>");
for (let i = 1; i <= 10; i++) {
    document.write(i*7 + ", ");
}

// 4
document.write("<br> Знайти суму всіх цілих чисел від 1 до 15. <br>");
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(sum);

// 5
document.write("<br> Знайти добуток усіх цілих чисел від 15 до 35. <br>");
let rez = 1;
for (let i = 15; i <= 35; i++) {
    rez *= i;
}
document.write(rez);

// 6
document.write("<br> Знайти середнє арифметичне всіх цілих чисел від 1 до 500. <br>");
let enumerator = 0;
let rez2 = 0;
for (let i = 1; i <= 500; i++) {
    rez2 += i;
    enumerator++;
}
rez2 = rez2 / enumerator;
document.write(rez2);

// 7
document.write("<br> Вивести суму лише парних чисел в діапазоні від 30 до 80. <br>");
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) sum2 += i;
}
document.write(sum2);

// 8
document.write("<br> Вивести всі числа в діапазоні від 100 до 200 кратні 3. <br>");
for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) document.write(i + ", ");
}

// 9,10,11
let number = +prompt("Введіть натуральне число");

// 9
document.write(`<br> Дано натуральне число ${number}. Знайти та вивести на сторінку всі його дільники. <br>`);
for (let i = 1; i <= number; i++) {
    if (number % i == 0) document.write(i + ", ");
}

// 10
let enumerator2 = 0;
document.write(`<br> Дано натуральне число ${number}. Визначити кількість його парних дільників. <br>`);
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        if (i % 2 == 0) enumerator2++;
    } 
}
document.write(`Кількість його парних дільників = ${enumerator2}`);

// 11
let sum3 = 0;
document.write(`<br> Дано натуральне число ${number}. Знайти суму його парних дільників. <br>`);
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        if (i % 2 == 0) sum3 += i;
    } 
}
document.write(`Сума його парних дільників = ${sum3}`);

// 12
document.write("<br> Надрукувати повну таблицю множення від 1 до 10. <br>");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i * j + ", ");
    }
    document.write("<br>");
}


// 13
document.write("Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). <br>");
for (let i = 20; i <= 30; i += .5) {
   document.write(i + ", ");
}

// 14
document.write("<br> Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. <br>");
for (let i = 10; i <= 100; i += 10) {
    document.write(i * 27 + "грн, ");
}
 
//  15
let number2 = +prompt("Введіть ціле число");
document.write(`<br> Дане ціле число ${number2}. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${number2}. <br>`);
for (let i = 1; i <= 100; i++) {
    if (i**2 < number2) document.write(i + ", ");
}

// 16
let chek = true;
let number3 = +prompt("Введіть ціле число. З'ясувати, чи є воно простим");
document.write(`<br> Дане ціле число ${number3}. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе). <br>`);
for (let i = 1; i <= number3; i++) {
    if (i != 1 && i != number3) {
        if (number3 % i == 0) {
            chek = false;
            break;
        } 
    }
}
if (chek == true) {
    document.write(`Число ${number3} є простим`);
} else {
    document.write(`Число ${number3} не є простим`);
}

// 17
let number4 = +prompt("Введіть деяке число");
let chek2 = false;
document.write(`<br> Дане деяке число ${number4}. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). <br>`);
for (let i = 1; i <= number4; i++) {
    if (3**i == number4) chek2 = true;
}
if (chek2 == true) {
    document.write(`Число ${number4} можна отримати шляхом зведення числа 3 у деякий ступінь.`);
} else {
    document.write(`Число ${number4} не можна отримати шляхом зведення числа 3 у деякий ступінь.`);
}