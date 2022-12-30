import { useState } from "react";
import { Container, InputField } from "./style";

const colors = [
    {color: 'green', hex: '#e2ffef'},
    {color: 'red', hex: '#ffe2e2'},
    {color: 'yellow', hex: '#ffffe2'},
    {color: 'blue', hex: '#e2f1ff'},
    {color: 'purple', hex: '#f0e6ff'},
    {color: 'default', hex: '#fff'}
];

export default function InputCard({addNewCard}) {
    const [isLabelActive, setIsLabelActive] = useState(false);
    const [color, setColor] = useState('default');

    function handleInputText(e){
        if(e.target.innerHTML.length > 0){
            setIsLabelActive(true)
        } else {
            setIsLabelActive(false)
        }
    }

    function handleNewNote(e){
        e.preventDefault();

        const title = e.target.elements.title;
        const description = e.target.children.cardDescription;
        const color = e.target.elements.color.value;
        
        if (!description.innerText.replace(/\s/g, '').length) {
            resetFields()
            return;
        }

        addNewCard(title.value, description.innerHTML, color);
        resetFields()
    }

    function resetFields(){
        document.getElementById('title').value = '';
        document.getElementById('cardDescription').innerHTML = '';
        setIsLabelActive(false)
    }

    function changeColor(e){
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
                    ></div>
                    <footer>
                        <div className="color">
                            {colors.map(color => (
                                <input type="radio" onClick={changeColor} name="color" key={color.hex} id={color.color} value={color.color} />
                            ))}
                            <div className="labels">
                                <label htmlFor="default" className="default active"></label>
                                <label htmlFor="green" className="green"></label>
                                <label htmlFor="red" className="red"></label>
                                <label htmlFor="yellow" className="yellow"></label>
                                <label htmlFor="blue" className="blue"></label>
                                <label htmlFor="purple" className="purple"></label>
                            </div>
                        </div>
                        <button type="submit">Concluir</button>
                    </footer>
                </form>
            </InputField>
        </Container>
    )
}