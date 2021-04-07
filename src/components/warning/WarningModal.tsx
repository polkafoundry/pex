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
  font-size: 13.5px;
  line-height: 18px;
  margin-top: 12px;
  text-align: center;
`

const Paragraph = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
`

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
}

function Link(props: any) {
  return (
    <a style={{outline: "none"}}
       href={props.href}
       target="_blank"
       rel="noopener noreferrer">{props.title}</a>
  )
}

export default function WarningModal({isOpen, onClose}: ModalProps) {

  return (
    <Modal isOpen={isOpen} onDismiss={() => onClose()}>
      <Wrapper>
        <CloseIcon onClick={() => onClose()}>
          <CloseColor/>
        </CloseIcon>
        <Title>
          <Paragraph>PEX is an Uniswap clone on <Link href="https://polkafoundry.com/" title="PolkaFoundry"/> testnet.</Paragraph>
          <Paragraph style={{fontSize: '16px'}}>Currently, it supports only ETH-PKF pair.</Paragraph>
        </Title>
        <Subtitle>
          You will have to setup MetaMask's Custom RPC before using PEX. From the MetaMask's 'Networks' dropdown, choose 'Custom RPC' and input the following info:
        </Subtitle>
        <ul style={{fontSize: '13.5px', marginTop: '8px'}}>
          <li>Network name: PolkaFoundry</li>
          <li>RPC URL: https://halongbay.polkafoundry.com</li>
          <li>Chain ID: 13</li>
        </ul>
        <Paragraph style={{fontSize: '12px', color: '#747474'}}>Please refer <Link href="" title="here"/> for introduction and further instruction. To get some PKF funds for your trial, please click <Link href="https://t.me/pkf_faucet_bot" title="here"/>.</Paragraph>
      </Wrapper>
    </Modal>
  )
}