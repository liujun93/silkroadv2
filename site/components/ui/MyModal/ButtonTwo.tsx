import React, { MouseEventHandler, useState } from 'react'
import s from './ButtonTwo.module.css'
import { useChain } from '@cosmos-kit/react'
import { ChainName, WalletModalProps } from '@cosmos-kit/core'

export const ButtonTwo = ({ chainName }: { chainName: string }) => {
  const { connect, openView, status, username, address, message, wallet } =
    useChain('wasmd')
  const [clicked, setClicked] = useState(false)

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    await connect()
    setClicked(true)
  }

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault()
    openView()
  }

  return (
    <div className="flex justify-center">
      <button className={`${s.root} ${s.ghost} mr-4`} onClick={onClickConnect}>
        {clicked ? 'My Wallet' : 'Connect Wallet'}
      </button>
      <style jsx>{`
        .${s.root} {
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          font-family: 'Quantico' sans-s;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          padding: 12px 24px;
          transition: background-color 0.2s ease-in-out;
          width: 185px;
        }

        .${s.root}:hover {
          background-image: url('wallet.gif');
          background-color: hotpink;
        }
      `}</style>
    </div>
  )
}

export default ButtonTwo
