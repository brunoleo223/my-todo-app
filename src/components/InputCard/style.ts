import styled, {css} from "styled-components";
const colors = {
    green: '#e2ffef',
    red: '#ffe2e2',
    yellow: '#ffffe2',
    blue: '#e2f1ff',
    purple: '#f0e6ff',
    default: '#fff'
} as const;

export const Container = styled.div<any>`
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 5px;
    position: relative;
    background: ${props => colors[props.color]};
`;

interface InputFieldProps {
    active: boolean;
}

export const InputField = styled.div<InputFieldProps>`
.intro{
    position: absolute;
    opacity: ${props => props.active ? 0 : 1};
}

.cardDescription{
    background: transparent;
    border: 0;
    font-size: 16px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
}

input{
    width: 100%;
    border: 0;
    background: transparent;
    display: ${props => props.active ? 'block' : 'none'};
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    z-index: 2;
    color: ${({ theme }) => theme.inputText}
}

footer{
    justify-content: space-between;
    display: ${props => props.active ? 'flex' : 'none'};
    margin-top: 20px;
    align-items: center;
    
    input{
        position: absolute;
        left: -5000px;
    }
    
    button{
        font-weight: bold;
        background: transparent;
        border: 0;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme.inputText};
        
        &:hover{
            background: ${({ theme }) => theme.inputHover};
        }
    }
}
`;

export const LabelContainer = styled.div`
    display: flex;
    background: #000;
    gap: 5px;
    padding: 5px;
    border-radius: 20px;
`;

interface LabelProps {
    customColor: string;
    isActive: boolean;
}

export const Label = styled.label<LabelProps>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: block;
    cursor: pointer;

    ${({ customColor }) => css`background: ${colors[customColor]}`};

    &.active{
      border: 2px solid #ddd;
  }
`;