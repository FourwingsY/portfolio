import styled from "styled-components"

export const History = styled.section`
  width: 100%;
`

export const Future = styled.div`
  position: relative;
  width: 100%;
`

export const TimelineFadein = styled.div`
  position: relative;
  width: 50%;
  height: 8rem;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 50%;
    height: 25%;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-top-left-radius: 2rem;
    box-sizing: border-box;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 50%;
    height: 75%;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-bottom-right-radius: 2rem;
  }
`

export const TimelineFadeout = styled.div`
  position: relative;
  width: 50%;
  height: 8rem;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: 50%;
    height: 25%;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-bottom-left-radius: 2rem;
    box-sizing: border-box;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 50%;
    height: 75%;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-top-right-radius: 2rem;
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
