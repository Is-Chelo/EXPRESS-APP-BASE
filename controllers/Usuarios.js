const {response, request} =require('express');

exports.usuariosGet=(req= request, res= response)=>{

    const query = req.query;
    
    res.json({
        ok:true
    })
    console.log(query)
}

exports.usuariosPut=(req, res= response)=>{

    const {id} = req.params

    console.log(id)

    res.json({
        ok:true
    })
}

exports.usuariosPost=(req, res= response)=>{
    res.json({
        ok:true
    })
    console.log(req.body)
}

exports.usuariosDelete=(req, res= response)=>{
    res.json({
        ok:true
    })
}


