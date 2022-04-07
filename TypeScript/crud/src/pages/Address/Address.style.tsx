import styled from 'styled-components';

export const ContainerFormAddress = styled.div`
  width: 85%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivForm = styled.div`
  width: 1400px;
  height: 850px;
  background-color: white;

  border-radius: 8px;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const LabelLogin = styled.label`
  color: #9FA2B4;
  font-family: 'Mulish';
  font-size: 17px;
`;

export const InputLogin = styled.input`
  width: 400px;
  height: 50px;
  background: #FCFDFE;

  padding: 10px;

  border: none;
  outline: none;
  border: 1px solid #F0F1F7;
  box-sizing: border-box;
  border-radius: 8px;
`;