import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentInput = styled.div`
  display: flex;
  padding: 0 40px;
  margin-top: 30px;
  align-items: center;
`;

export const InputCard = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 10px 0 0 10px;
  margin: 0 auto;
  font-size: 24px;
  border: none;
  :focus {
    border: none;
  }
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 30px 0;
`;

export const ContentComment = styled.div`
  background: #042940;
  border-radius: 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  align-items: center;
  padding: 40px;
`;

export const Comment = styled.li`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
