const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'mysql',
})
connection.connect((error) => {
    if (error) {
        return console.log('ошибка');
    } else {
        return console.log('Подключение к бд прошло успешно')
    }
})

module.exports = connection