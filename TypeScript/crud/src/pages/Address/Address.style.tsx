import styled from 'styled-components';

export const DivTop = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableAddress = styled.div`
  display: grid;
  grid-template-columns: 30% repeat(6, 12%);
  
  span {
    opacity: 0.5;
    margin-bottom: 5px;
  }
`;

export const ListAddressDiv = styled.div`
  display: grid;
  grid-template-columns: 30% repeat(6, 12%);
  border-top: 1px #DFE0EB solid;
`;

export const ButtonRegister = styled.button`
  width: 100px;
  height: 40px;
  background: #3751FF;
  color: white;

  margin-left: 30px;

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    background: #2538b1;
  }
`;