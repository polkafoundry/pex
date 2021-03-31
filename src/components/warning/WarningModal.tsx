import React from "react";
import Modal from "../Modal";
import styled from 'styled-components'
import { ReactComponent as Close } from '../../assets/images/x.svg'

const Wrapper = styled.div`
  padding: 24px;
  position: relative;
  width: 100%;
`

const CloseIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.text4};
  }
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center
`

const Subtitle = styled.div`
  margin-top: 12px;
  text-align: center;
`

export default function WarningModal() {

  const [modal, setModal] = React.useState(true)

  return (
    <Modal isOpen={modal} onDismiss={() => setModal(false)}>
      <Wrapper>
        <CloseIcon onClick={() => setModal(false)}>
          <CloseColor/>
        </CloseIcon>
        <Title>
          This is an Uniswap app built on <a style={{outline: "none"}}
                                             href="https://polkafoundry.com/"
                                             target="_blank"
                                             rel="noopener noreferrer">Polkafoundry</a>.
        </Title>
        <Subtitle>
          If you want to try it, please set up your Metamask RPC like this:
        </Subtitle>
        <ul>
          <li>Network name: Halongbay</li>
          <li>RPC URL: http://54.169.215.160:9933</li>
          <li>Chain ID: 13</li>
        </ul>
      </Wrapper>
    </Modal>
  )
}