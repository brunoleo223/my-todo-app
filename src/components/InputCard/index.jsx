import { useState } from "react";
import { Container, InputField } from "./style";

export default function InputCard({addNewCard}) {
    const [inputValue, setInputValue] = useState('');
    const [labelActive, setLabelActive] = useState(false);

    function handleInputText(e){
        if(e.target.innerHTML.length > 0){
            setInputValue(e.target.innerHTML);
            setLabelActive(true)
        } else {
            setInputValue('');
            setLabelActive(false)
        }
    }

    function handleNewNote(e){
        e.preventDefault();

        const title = e.target.elements.title;
        const description = e.target.children.cardDescription;

        addNewCard(title.value, description.innerHTML);

        document.getElementById('title').value = '';
        document.getElementById('cardDescription').innerHTML = '';
        setLabelActive(false)
    }

    return (
        <Container>
            <InputField active={labelActive}>
                <form onSubmit={handleNewNote}>
                    <label>Criar uma nota...</label>
                    <input type="text" placeholder="Título" name="title" id="title" />
                    <div 
                        id="cardDescription"
                        className="cardDescription"
                        contentEditable="true"
                        onKeyUp={handleInputText}
                        aria-label="Criar uma nota..."
                    ></div>
                    <button type="submit">Concluir</button>
                </form>
            </InputField>
        </Container>
    )
}