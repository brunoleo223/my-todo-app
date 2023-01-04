import React, { useContext, useState } from "react";
import { CardsContext } from "../../Contexts/CardsContext";
import { removeNullSpaces } from "../../helpers/consts";
import { Container, InputField, Label, LabelContainer } from "./style";

const colors = [
  { color: 'green', hex: '#e2ffef' },
  { color: 'red', hex: '#ffe2e2' },
  { color: 'yellow', hex: '#ffffe2' },
  { color: 'blue', hex: '#e2f1ff' },
  { color: 'purple', hex: '#f0e6ff' },
  { color: 'default', hex: '#fff' }
];

// tipagem com os nomes das cores

type Exemplo = 'nome1' | 'nome2'

export default function InputCard() {
  const [isLabelActive, setIsLabelActive] = useState(false);
  const [color, setColor] = useState('default'); /
  const [selectedColor, setSelectedColor] = useState<Exemplo>('nome2')

  // crair um estado pra armazenar qual esta selecionado no momento

  const { addNewCard } = useContext(CardsContext)

  function handleInputText(e) {
    if (e.target.innerHTML.length > 0) {
      setIsLabelActive(true)
    } else {
      setIsLabelActive(false)
    }
  }

  function handleNewNote(e) {
    e.preventDefault();

    const title = e.target.elements.title;
    const description = e.target.children.cardDescription;
    const color = e.target.elements.color.value;

    if (!description.innerText.replace(removeNullSpaces, '').length) {
      resetFields()
      return;
    }

    addNewCard(title.value, description.innerHTML, color);
    resetFields()
  }

  function resetFields() {
    // @ts-ignore
    document.getElementById('title').value = '';
    // @ts-ignore
    document.getElementById('cardDescription').innerHTML = '';
    setIsLabelActive(false)
  }

  function changeColor(e) {
    setColor(e.target.value)
    const labels = document.querySelectorAll('.labels label');

    labels.forEach(label => {
      label.classList.remove('active')
    });

    e.target.nextElementSibling.classList.add('active')
  }

  return (
    <Container color={color}>
      <InputField active={isLabelActive} color={color}>
        <form onSubmit={handleNewNote}>
          <label className="intro">Criar uma nota...</label>
          <input type="text" placeholder="Título" name="title" id="title" />
          <div
            id="cardDescription"
            className="cardDescription"
            contentEditable="true"
            onKeyUp={handleInputText}
            aria-label="Criar uma nota..."
          />
          <footer>
            <div className="color">
              {colors.map(color => (
                <input type="radio" onClick={changeColor} name="color" key={color.hex} id={color.color} value={color.color} />
              ))}
              <LabelContainer>
                {/* TODO alterar o active das labels */}
                {
                  colors.map(item => {
                    return (<Label htmlFor={item.color} key={item.hex} customColor={item.color} isActive={selectedColor === item.color} />)
                  })
                }
              </LabelContainer>
            </div>
            <button type="submit">Concluir</button>
          </footer>
        </form>
      </InputField>
    </Container>
  )
}