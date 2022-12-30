import styled from "styled-components";
const colors = {
    green: '#e2ffef',
    red: '#ffe2e2',
    yellow: '#ffffe2',
    blue: '#e2f1ff',
    purple: '#f0e6ff'
}

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 5px;
    position: relative;
    background: ${props => props.color ? colors[props.color] : '#fff'};
`;

export const InputField = styled.div`
    .intro{
        position: absolute;
        opacity: ${props => props.active ? 0 : 1};
        color: ${({ theme }) => theme.inputText}
    }

    .cardDescription{
        background: transparent;
        border: 0;
        font-size: 16px;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        color: ${({ theme }) => theme.inputText}
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
        .labels{
            display: flex;
            background: #000;
            gap: 5px;
            padding: 5px;
            border-radius: 20px;

            label{
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: block;
                cursor: pointer;

                &.green{
                    background: #e2ffef;
                }

                &.red{
                    background: #ffe2e2;
                }

                &.yellow{
                    background: #ffffe2;
                }

                &.blue{
                    background: #e2f1ff;
                }

                &.purple{
                    background: #f0e6ff;
                }

                &.default{
                    background: #fff;
                }

                &.active{
                    border: 2px solid #ddd;
                }
            }
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