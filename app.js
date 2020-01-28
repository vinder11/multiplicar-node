const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(colors.red(`Archivo creado:`) + ` ${archivo}`.green))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('comando no reconocido');
        break;
}

//let argv2 = process.argv;
//let parametro = argv2[2];
//let base = parametro.split('=')[1];
//console.log(base);