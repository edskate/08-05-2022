'use strict'

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.remove('active')


const tempclient = {
    nome: "fernando",
    email: "fernando@gmail.com",
    celular "123456789",
    cidade: "sao paulo"
}

// crud - creat read update delete



const creatclient = (client) => {
localStorage.setItem("id" , "111")
}

// Eventos

document.getElementById('cadastrarClient')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)