import { useState } from "react";
import { Container, InputField } from "./style";

export default function InputCard() {
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

    return (
        <Container>
            <InputField active={labelActive}>
                <label>Criar uma nota...</label>
                <div 
                    className="cardDescription"
                    contentEditable="true"
                    onKeyUp={handleInputText}
                    aria-label="Criar uma nota..."
                ></div>
                <button>Fechar</button>
            </InputField>
        </Container>
    )
}