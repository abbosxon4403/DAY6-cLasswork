let son1 = prompt("1-chi sonni kiriting:")
let a = prompt("ishorani belgilang: + * - / %")
let son2 = prompt("2-chi sonni kiriting:")
console.log(isNaN(son1), isNaN(son2));
if (son1 && son2) {
    if (isNaN(son1) || isNaN(son2)) {
        console.log("Raqamni kiriting , boshqa belgini emas !");
        if (isNaN(son1)) {
            console.log("1-chi kiritilgan belgi son emas");
        }
        if (isNaN(son2)) {
            console.log("2-chi kiritilgan belgi son emas");
        }

    } else if (a == '+') {
        console.log("Javob =", Number(son1) + Number(son2));
    } else if (a == '-') {
        console.log("Javob =", Number(son1) - Number(son2));
    } else if (a == '*') {
        console.log("Javob =", Number(son1) * Number(son2));
    } else if (a == '/') {
        console.log("Javob =", Number(son1) / Number(son2));
    } else if (a == '%') {
        console.log("Javob =", Number(son1) % Number(son2));
    } else {
        console.log("ishora notog'ri berilgan");
    }
} else {
    console.log("sonni kiritmadingiz");
}