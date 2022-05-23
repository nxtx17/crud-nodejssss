const conexion = require('../database/db');

exports.save = (req, res)=> {
    const user = req.body.user;
    const rol = req.body.tipo_usuario;
    const apellidos = req.body.apellidos;

    conexion.query('INSERT INTO usuarios SET ?', {nombres:user,apellidos:apellidos, tipo_usuario:rol},(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

}
