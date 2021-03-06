var pool = require('./bd');
var md5 = require('md5');

async function getUserAndpassword(usuario, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [usuario, md5(password)]);
        return rows[0]
    } catch (error) {
        console.log(error)
    }
}

//try-catch > estructuras de control para el manejo de errores.
module.exports = { getUserAndpassword };