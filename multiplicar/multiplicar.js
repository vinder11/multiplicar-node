//////////requires////////
const colors = require('colors');


const fs = require('fs');

let listarTabla = async(base, limite) => {

    console.log(`Tabla de ${base}`.green);

    if (!Number(base) || !Number(limite)) {
        throw new Error(`La base o el limite no son datos validos`);
    } else {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        return data;
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un Numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}