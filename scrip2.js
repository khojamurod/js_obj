

let x = 10

for(let i=1; i<=x ; i++){

    
    let user=prompt('Foydalanuvchining ismi', ('name'));
    let age=+prompt('Foydalanuvchining yoshi' ,(18));
    let users={
        userName: user,
        userAge: age,
        userNum: x
    }
    console.log( 'Foydalanuvching ismi '+users.userName+ ' , uning yoshi '+ users.userAge);
    console.log( i + (' chi foydalanuvchi'));


}