import { useContext, useState } from "react";
import { CardsContext } from "../../Contexts/CardsContext";
import { regexToRemoveSpaces } from "../../helpers/consts";
import { Container, InputField, Label, LabelContainer } from "./style";

const colors = [
    {color: 'default', hex: '#fff'},
    {color: 'green', hex: '#e2ffef'},
    {color: 'red', hex: '#ffe2e2'},
    {color: 'yellow', hex: '#ffffe2'},
    {color: 'blue', hex: '#e2f1ff'},
    {color: 'purple', hex: '#f0e6ff'}
];

interface ColorsProps{
    color: string;
    hex: string;
}

export default function InputCard() {
    const [isLabelActive, setIsLabelActive] = useState(false);
    const [color, setColor] = useState('default');
    const [selectedColor, setSelectedColor] = useState<ColorsProps>( colors[0] );
    const { addNewCard } = useContext(CardsContext)

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
        
        if (!description.innerText.replace(regexToRemoveSpaces, '').length) {
            resetFields();
            return;
        }

        addNewCard(title.value, description.innerHTML, color);
        resetFields()
    }

    function resetFields(){
        // @ts-ignore
        document.getElementById('title').value = '';
        // @ts-ignore
        document.getElementById('cardDescription').innerHTML = '';
        setIsLabelActive(false)
    }

    function changeColor(color: ColorsProps){
        setColor(color.color);
        setSelectedColor(color);
    }

    return (
        <Container color={color} >
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
                            {colors.map(item => (
                                <input 
                                    type="radio" 
                                    name="color" 
                                    key={item.hex} 
                                    id={item.color} 
                                    value={item.color} 
                                />
                            ))}
                            <LabelContainer>
                                {
                                    colors.map(( item: ColorsProps ) => {
                                        return (
                                            <Label 
                                                key={item.color}
                                                htmlFor="default" 
                                                customColor={item.color} 
                                                isActive={selectedColor.color === item.color}
                                                onClick={ () => changeColor( item ) } 
                                            />
                                        )
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