let avgMarks = Number(prompt('Enter Average marks of the student'));

if (avgMarks < 60) {
    console.log('F, You fail');
} else if (avgMarks < 70) {
    console.log('You grade is D');
}else if (avgMarks < 80) {
    console.log('You grade is C');
} else if (avgMarks < 90 ) {
    console.log('You grade is B');
} else if (avgMarks < 100) {
    console.log('You grade is A');
}else console.log('You got 100 %');