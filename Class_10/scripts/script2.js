function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Anna", "Lala", 30, "green");