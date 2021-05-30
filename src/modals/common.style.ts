import styled, { css } from "styled-components"

const titleStyle = css`
  font-weight: 700;
  color: #000;
  line-height: 1.5;
`

/*** COMMON ***/
export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  ${titleStyle};
`

export const Body = styled.div`
  position: relative;
  padding: 20px 30px;
  text-align: center;
  overflow-y: auto;
`

export const Buttons = styled.div`
  position: sticky;
  bottom: 0;
`

export const Message = styled.p<{ noTitle?: boolean }>`
  font-size: 14px;
  color: #333;
  white-space: pre-line;
  ${({ noTitle }) => noTitle && titleStyle};
`

export const ModalButton = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0 16px;
  background-color: #ccc;
  color: #000;

  // border-radius + overflow:hidden safari 버그로 추가(모서리 영역에서 clipping이 되지 않음)
  transform: translateZ(0);

  :hover {
    background-color: #ddd;
  }
  :active {
    background-color: #eee;
  }
`

export const Modal = styled.div`
  position: relative;
  width: 360px;
  max-height: 70vh;
  border-radius: 16px;
  background: white;
  overflow: hidden;
  font-size: 16px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
`
