import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  background: rgba(39, 1, 64, 0.5);
  flex-direction: column;
  border: 3px solid #1d1d1d;
  border-radius: 10px;
  width: 95%;
  margin: 30px auto;
  box-shadow: rgb(0 0 0 / 86%) -5px 9px 15px -3px;
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const ContentInput = styled.div`
  display: flex;
  padding: 0 40px;
  margin-top: 30px;
  align-items: center;
`;

export const InputCard = styled.input`
  width: 90%;
  height: 58px;
  border-radius: 10px 0 0 10px;
  margin: 0 auto;
  font-size: 24px;
  border: none;
  padding-left: 30px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
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
  background: #270140;
  border-radius: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  align-items: flex-start;
  padding: 40px;
  box-shadow: rgb(0 0 0 / 86%) -5px 9px 15px -3px;
`;

export const CardNumber = styled.div`
  color: #fefefe;
`;

export const CardInfoAndDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Comment = styled.li`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
