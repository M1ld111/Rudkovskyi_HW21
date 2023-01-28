const Student = require('./script');
test('середня оцінка', () => {
    const student = new Student('Axl', 'Rose', 1962, [50, 50, 50, 50, 50, 50, 50, 50, 50]);
    student.averagerOfGrades()
    expect(student.averageGrade).toBe(50);
}
)
test('середнє відвідування', () => {
    const student2 = new Student('Jimi', 'Hendrix', 1942, [50, 50, 50, 50, 50, 50, 50, 50, 50]);
    student2.arrayPresence = [1, 1, 1, 0]
    
    student2.averagerOfPresence()
    expect(student2.averagePresence).toBe(0.75);
}
)

test('редиска', () => {
    const student3 = new Student('Bon', 'Jovi', 1962);
    student3.averageGrade = 42;
    student3.averagePresence = 0,4;

    expect(student3.summary()).toBe(console.log('редиска'));
}
)