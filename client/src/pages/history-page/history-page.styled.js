import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }`;


export const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;

& > * {
  padding-right: 15px;
  padding-left: 15px;
}

& > *:not(:last-child) {
  margin-right: 15px;
}
`;
