import { createServer } from 'http'
import { createReadStream } from 'fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url' // la fonction fileURLToPath transforme url en chemin
// en commonjs la variable globale __filename permet de récupérer directement le chemin absolu du fichier exécuté
const currentFilePath = fileURLToPath(import.meta.url) // en ECMASCRIPT import.meta.url contient le chemin absolue du fichier en cours
// en comminjs la variable globale __dirname permet de récupérer le chemin absolu du dossier du programme en cours
const currentFileDir = dirname(currentFilePath)
const app = createServer((req, res) => {
  let filename = resolve(currentFileDir, 'pages', '404.html')
  if (req.url.endsWith('index.html') || /\/$/.test(req.url)) {
    filename = filename.replace('404', 'index')
    res.writeHead(200, { "Content-Type" : "text/html"})
    createReadStream(filename).pipe(res)
  }
 else if(req.url.match('favicon.ico')) {
    return
  }
  else {
    res.writeHead(404, { "Content-Type" : "text/html"})
    createReadStream(filename).pipe(res)
  }
})

export default app