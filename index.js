//Metodos HTTP

//1. Conocer la url del endpoint 

const api_url = 'https://ocampo-dev.wicode.com.mx/api/v1/apoyos'

//Metodo GET --> leer datos (Read)
// Utilizar el metodo Fetch navito de javascript para leer datos

// Promesas, las promesas son eventos asincronos 

fetch(api_url) // Sino especifico por defecto el metodo que ejecuta es una petición GET 
.then ((response)=>response.json())
.then((data)=>console.log('con Fetch', data)) // El array tiene el key data por eso se coloca para extraerlo 

//Async , Away 
async function getData(){ // async porque es una función asincrona que puede demorar algún tiempo para devolver una respuesta 
    const respuesta = await fetch (api_url) // Away  indica que debe ejecutarse este paso antes de seguir la siguiente linea
    const data = await respuesta.json()
    return console.log( 'con Async Await', data);
}

getData(); //Llamo la función para que se ejecute 

//Metodo POST: Vamos a crear información y la vamos a mandar al servidor (Create)

const config ={
    method : 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 

    body: JSON.stringify({
        lugar: 'Colombia',
        nombre: 'Juan Perez', 
        descripcion : 'Apoyo para Bootcamp Ucamp',
        monto : '1200', 
        activo : 'true', 
        periodicidad : 'Mensual', 
        fecha: new Date(), 
        imagen : 'data: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LvaANmRzOisRWpC8Gt7QsQHaE8%26pid%3DApi&f=1&ipt=81529db5c3194ea9228ba932576b5d3ad36229c5026d40f017826699d9b9dee6&ipo=images',
        tipo_Dependencia : 'Desarrollo economico'


    })
}
// Se le aplica la configuración que especificamos antgeriormente 
fetch(api_url, config) //--> Se debe configurar para que sea post, se agrega el parámetro del config que es donde se configura el body y el content Type 
.then ((response)=>response.json())
.then((data)=>console.log('con Fetch', data))

//Petición POST con asyncy Away 

async function PostData(){ // async porque es una función asincrona que puede demorar algún tiempo para devolver una respuesta 
    const respuesta = await fetch (api_url, config) // Away  indica que debe ejecutarse este paso antes de seguir la siguiente linea
    const data = await respuesta.json()
    return console.log( 'con Async Await', data);
}

PostData();

