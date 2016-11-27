// 建構式：for 建立物件時使用的程式碼
function Car(name) {
    this.name = name; // this 指向 new他的人
}

// 物件導向的概念建立  執行
var o = new Car('BMW');

// 如果不用new 直接執行Car, this 會指向 window, 如果不知道this是什麼盡量不要用，因為他很容易指向window


// o 的上層物件是 car.prototype
// o 的型別是