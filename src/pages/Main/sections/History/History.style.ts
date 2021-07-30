import styled from "styled-components"

export const History = styled.section`
  width: 100%;
`

export const Future = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
`

export const TimelineFadein = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  ::before {
    content: "";
    position: absolute;
    display: block;
    bottom: 2rem;
    left: 2rem;
    width: 2px;
    height: 10rem;
    background: linear-gradient(rgba(0, 0, 0, 0) 10%, #000);
  }
  ::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -1px;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-radius: 0 0 2rem 0;
  }
`

export const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0;
`

export const NotDeveloper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background: linear-gradient(hsla(220, 60%, 80%, 0), hsla(220, 60%, 50%, 1));
`

export const TimelineFadeout = styled.div`
  position: absolute;
  top: 0;
  right: 50%;

  ::before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-radius: 2rem 0 0 0;
  }
  ::after {
    content: "";
    position: absolute;
    display: block;
    top: 2rem;
    right: 2rem;
    width: 2px;
    height: 10rem;
    background: linear-gradient(#000, rgba(0, 0, 0, 0) 90%);
  }
`
