self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.delete('pousada-vila-ditalia-v1').then(()=>self.registration.unregister())));
