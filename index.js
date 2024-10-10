// 1-misol

// function a(marka, model, yil) {
//   this.marka = marka;
//   this.model = model;
//   this.yil = yil;

//   this.getInfo = function () {
//     return (
//       "marka: " + this.marka + ", model: " + this.model + ", yil: " + this.yil
//     );
//   };
// }

// let a1 = new a("jm", "damas", 2009);
// console.log(a1.getInfo());

// 2-misol

// function talaba(name, age, grade) {
//   this.name = name;
//   this.age = age;
//   this.grade = grade;

//   this.isPassed = function () {
//     return this.grade > 60;
//   };
// }

// const talaba1 = new talaba("Ronaldu", 60, 100);
// const talaba2 = new talaba("messi", 5, 59);
// const talaba3 = new talaba(
//   "Eron o'zbekistonni 1 ta kam bo'lib joyini ko'rsatdi",
//   99,
//   100
// );

// console.log(talaba1.name, "ammaladi", talaba1.isPassed());
// console.log(talaba2.name, "yeqildi", talaba2.isPassed());
// console.log(talaba3.name, "malades", talaba3.isPassed());

// 5-misol

// function bank(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = function (amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     }
//   };
// }

// const money = new bank("2020 6000 6353 0015", 1000);
// money.deposit(800);
// console.log(money.balance);
// money.withdraw(200);
// console.log(money.balance); //shu qatordanew bank hisobidagi puldan ayrilmadi, money deposit qo'shilgan summadan ayirdi, shu joyini to'g'ri qilolmadim, chatgptgayam chuntiromadim

// 4-task

// Number.prototype.kv = function() {
//     return this * this;
// };

// const a =+prompt("a ni kiriting");
// console.log(a.kv());

// const b =+prompt("b ni kiriting");
// console.log(b.kv());

// task-5

// Array.prototype.yigindi = function () {
  
//     let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// };

// const a = [1, 3, 2];
// console.log(`natija: ${a.yigindi()}`);

// const b = [1, 2];
// console.log(`natija: ${b.yigindi()}`);
