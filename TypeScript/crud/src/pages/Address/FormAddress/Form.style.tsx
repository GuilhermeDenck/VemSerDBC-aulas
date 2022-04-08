import styled from 'styled-components';

export const ContainerFormAddress = styled.div`
  width: 85%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivForm = styled.div`
  width: 950px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const InputAddress = styled.input`
  width: 800px;
  height: 40px;
  background: #FCFDFE;

  padding: 10px;

  border: none;
  outline: none;
  border: 1px solid #F0F1F7;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const SelectAddress = styled.select`
  width: 800px;
  height: 40px;
  background: #FCFDFE;

  padding: 10px;

  border: none;
  outline: none;
  border: 1px solid #F0F1F7;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const ButtonSend = styled.button`
  width: 85%;
  height: 50px;
  background: #3751FF;
  color: white;

  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    background: #2538b1;
  }
`;