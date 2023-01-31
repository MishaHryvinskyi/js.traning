const salary = 100;

if(salary <= 500){
    console.log('Рівень1');
}else if(salary > 500 && salary < 1500){
    console.log('Рівень2');
}else if(salary > 1500 && salary < 3000){
    console.log('Рівень3');
}else {
    console.log('Рівень4');
}