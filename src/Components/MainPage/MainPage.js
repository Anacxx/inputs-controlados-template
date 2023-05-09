import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [inputNome, setInputNome] = useState("")
  const [inputIdade, setInputIdade] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  function mostrarValorDosInputs(event){
    event.preventDefault()
    console.log({inputNome,inputIdade, estadoCivil})
    limparInputs()
  }
  function limparInputs(){
    setInputNome("")
    setEstadoCivil("")
    setInputEmail("")
    setInputIdade("")
  }
  console.log(inputNome)
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={mostrarValorDosInputs}>
        <label>
          Nome:
          <Input value ={inputNome} onChange={(event) => setInputNome(event.target.value)}/>
        </label>
        <label>
          Idade:
          <Input value={inputIdade} onChange={(event) => setInputIdade(event.target.value)}/>
        </label>
        <label>
          E-mail:
          <Input value={inputEmail} onChange={(event) => setInputEmail(event.target.value)}/>
        </label>
        <label>
          <select value = {estadoCivil} onChange={(event) => setEstadoCivil(event.target.value)}>
            <option value="" disabled>-</option>
            <option value= "Nenhum">Nenhum</option>
            <option value= "Solteira">Solteira</option>
            <option value= "Casada">Casada</option>
            <option value= "Viuva">Viuva</option>
          </select>
        </label>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
