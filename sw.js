const nombreCache = 'apv-v1';
const  archivos = [
    '/',
    '/index.html',
    '/css/boostrap.css',
    '/css/style.css',
    '/js/app/js',
    '/js/apv.js'
];


//Cuando se instala el service workers
self.addEventListener('install', e =>{
    console.log('Instalado el Service Workers')
    e.waitUntill{
        caches.open(nombreCache)
            .then( cache =>{
                console.log('cacheando');
                cache.addAll(archivos);
            })
    }
})


//Activar service worker

self.addEventListener('activate', e=>{
    console.log('Service worker activated')
    
    e.waitUntill(
        caches.keys()
            .then( keys => {
                return Promise.all(
                    keys.filter( key => key !== nombreCache)
                        .map( key => cache.delet(key)) //Borra las versiones anteriores
                )
            })
    )
})


//Evento Fetch para descargar archivos estaticos

self.addEventListener('fetch', e=>{
    e.respondeWidth(
        caches.match(e.request)
            .then((respuestaCache =>{
                return respuestaCache
            }))
            .catch( ()=> catches.match('./error.html') )
    )
})