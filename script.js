class Student {
    constructor(name, surname, year, grades = []) {
        this.name = name
        this.surname = surname
        this.year = year
        this.grades = grades
    }

    arrayPresence = [];
    averageGrade = 0;
    averagePresence = 0;

    presence(booleanValue) {
        if (this.arrayPresence.length <= 25) {
            this.arrayPresence.push(booleanValue)
            return this.arrayPresence
        } else {
            throw TypeError('max visits');
        }
    }

    gradePusher(number) {
        if (number >= 0 && number <= 100) {
            this.grades.push(number)
        } else {
            throw TypeError('write a corect value (0-100)');
        }
    }

    averagerOfGrades() {
        this.averageGrade = (this.grades.reduce((a, b) => a + b, 0) / this.grades.length)
        return this.averageGrade
    }



    averagerOfPresence() {
        this.averagePresence = this.arrayPresence.reduce((a, b) => a + b, 0) / this.arrayPresence.length
        return this.averagePresence
    }

    summary() {
        if (this.averageGrade >= 90 && this.averagePresence >= 0.9) {
            return console.log('Молодець, не редиска')
        } else if (this.averageGrade >= 90 || this.averagePresence >= 0.9) {
            return console.log('Молодець, напівредиска')
        } else {
            return console.log('редиска')
        }
    }
}

const student1 = new Student('Bob', 'Dylan', 1941)
for (let i = 0; i < 25; i++) {
    if (Boolean(Math.round(Math.random())) == 1) {
        student1.presence(1)
        student1.gradePusher(100)
    } else {
        student1.presence(0)
        student1.gradePusher(90)
    }
}

student1.averagerOfGrades()
student1.averagerOfPresence()
student1.summary()

const student2 = new Student('John', 'Frusciante', 1970)

for (let i = 0; i < 25; i++) {
    if (Boolean(Math.round(Math.random())) == 1) {
        student2.presence(1)
        student2.gradePusher(100)

    } else {
        student2.presence(0)
        student2.gradePusher(100)

    }
}

student2.averagerOfGrades()
student2.averagerOfPresence()
student2.summary()

const student3 = new Student('Louis', 'Armstrong', 1901)


for (let i = 0; i < 25; i++) {
    if (Boolean(Math.round(Math.random())) == 1) {
        student3.presence(1)
        student3.gradePusher(100)

    } else {
        student3.presence(0)
        student3.gradePusher(80)

    }
}

student3.averagerOfGrades()
student3.averagerOfPresence()
student3.summary()

function sum(num1, num2) {
return num1 + num2
}

module.exports = Student // важко було з тими тестами, в неті знайшов відос і по ньому робив і ніби зрозумів принцип, але можна це записувати в менторське :)

