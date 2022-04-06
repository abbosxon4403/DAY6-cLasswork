let son1 = prompt("1-chi sonni kiriting:")
let a = prompt("ishorani belgilang: + * - / %")
let son2 = prompt("2-chi sonni kiriting:")
let html = document.getElementById('test;')
console.log(isNaN(son1), isNaN(son2));
if (son1 && son2) {
    if (isNaN(son1) || isNaN(son2)) {
        console.log("Raqamni kiriting , boshqa belgini emas !");
        if (isNaN(son1)) {
            test.innerHTML = ("1-chi kiritilgan belgi son emas");
            console.log("1-chi kiritilgan belgi son emas");
        }
        if (isNaN(son2)) {
            test.innerHTML = ("2-chi kiritilgan belgi son emas");
            console.log("2-chi kiritilgan belgi son emas");
        }
        if (son1 == 0) {
            console.log("0 soni yo'q son");
        }
        if (son2 == 0) {
            console.log("0 soni yo'q son");
        }

    } else if (a == '+') {
        test.innerHTML = ("Javob =", Number(son1) + Number(son2));
        console.log("Javob =", Number(son1) + Number(son2));
    } else if (a == '-') {
        test.innerHTML = ("Javob =", Number(son1) - Number(son2));
        console.log("Javob =", Number(son1) - Number(son2));
    } else if (a == '*') {
        test.innerHTML = ("Javob =", Number(son1) * Number(son2));
        console.log("Javob =", Number(son1) * Number(son2));
    } else if (a == '/') {
        test.innerHTML = ("Javob =", Number(son1) / Number(son2));

        console.log("Javob =", Number(son1) / Number(son2));
    } else if (a == '%') {
        test.innerHTML = ("Javob =", Number(son1) % Number(son2));
        console.log("Javob =", Number(son1) % Number(son2));
    } else {
        test.innerHTML = ("ishora notog'ri berilgan");

        console.log("ishora notog'ri berilgan");
    }
} else {
    test.innerHTML == ("sonni kiritmadingiz");
    console.log("sonni kiritmadingiz");
}