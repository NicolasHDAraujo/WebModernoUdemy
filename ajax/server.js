const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))//servir os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true }))//ler dados do formulario e transformar em obj
app.use(bodyParser.json())//se vier json vai transformar em obj

const multer = require('multer')//interpretar formulario

const storage = multer.diskStorage({//personalizar a pasta e o nome do arquivo que vai salvar
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')//função que vai interpretar o upload, com o nome do arquivo

app.post('/upload', (req, res) => {//requisição via post para fazer o upload do arquivo
    upload(req, res, err => {
        if (err) {//tratando o erro
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {//recebendo dados da pag Axios2
    res.send({
        ...req.body,//retornando em spred tudo que vem na resposta 
        id: 7//adcionando id
    })
})

app.get('/parOuImpar', (req, res) => {//função utilizada na aula de Axios 2
    // req.body   //formas de receber dados no frontend
    // req.query
    // req.params //
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))