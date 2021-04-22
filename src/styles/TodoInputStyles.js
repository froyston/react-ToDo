import styled from 'styled-components';

export const View = styled.div`
    align-content: 'center';
    margin-top: 10px;
    margin-bottom: 10px;
    text-align:center;
`;

export const Input = styled.input`
   width: 385px;
   height: 30px;
   border: 2px solid #015;
   border-radius:5px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 3px;
    width: 150px;
    margin-top: 10px;
    padding: 15px 18px;
    cursor: pointer;
    color: #000;
    background-color: #f4ffac;
    box-shadow: 0px 0px 4px 4px #aaa;
    font-weight: 900;
    background-position: center;
    &:hover {
        background: #ccc radial-gradient(circle, transparent 1%, #616161 1%) center/15000%;
    }
    &:active {
        background-color: #ccc;
        background-size: 100%;
        transition: background 0s;
    }
`;

export const SubmitButton = styled(Button)`
  width: 250px;
`;
