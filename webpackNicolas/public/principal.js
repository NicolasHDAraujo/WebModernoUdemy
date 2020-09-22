//const Pessoa = import('./pessoa')
import Pessoa from '../src/pessoa'
import '../src/modulos/moduloA'
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())