//Cuando se instala el service workers
self.addEventListener('install', e =>{
    console.log('Instalado el Service Workers')
    console.log(e)
})


//Activar service worker

self.addEventListener('activate', e=>{
    console.log('Service worker activated')
    console.log(e)
})
