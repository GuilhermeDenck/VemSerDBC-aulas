import styled from 'styled-components';

export const ContainerPage = styled.div`
  background-color: #F7F8FC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 85%;
`;

export const TitlePage = styled.h1`
  font-size: 20px;
  margin-top: 60px;
  margin-left: 30px;
  text-align: start;
`;

export const TablePersons = styled.table`
  display: grid;
  grid-template-columns: 40% repeat(3, 20%);
  opacity: 0.5;

  td {
    margin-bottom: 5px;
  }
`;

export const ListPersons = styled.div`
  display: grid;
  grid-template-columns: 40% repeat(3, 20%);
  border-top: 1px #DFE0EB solid;
`;

export const ContainerList = styled.div`
  display: flex;
  width: 90%;
  margin-left: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
`;