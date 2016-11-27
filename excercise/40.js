function Car(name) {
    this.name = name;
    return this;
}

// 可以指定this

Car.call({}, 'BMW');
Car.apply({}, ['BMW']);