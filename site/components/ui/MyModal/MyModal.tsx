import { WalletModalProps, WalletRepo } from '@cosmos-kit/core'
import { ChainProvider } from '@cosmos-kit/react'
import React, { Dispatch, useState } from 'react'
import Select from '.'
import { ChainOption } from '../types'
import Modal from '../Modal'
import ButtonTwo from './ButtonTwo'
import Button from '../Button'

const MyModal = ({ isOpen, setOpen, walletRepo }: WalletModalProps) => {
  function onCloseModal() {
    setOpen(false)
  }

  const [showModal, setShowModal] = useState(false)
  const options = [
    { value: '', label: 'Choose Chain' },
    { value: 'option1', label: 'Cosmos 🪐' },
    { value: 'option2', label: 'Osmosis 🧑‍🔬' },
    { value: 'option3', label: 'Silk 💰 (Coming Soon!)' },
    { value: 'option4', label: 'Custom IBC ⚛️' },
  ]
  const [selectedChain, setSelectedChain] = useState<ChainOption | null>(null)
  async function handleConnectWallet(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault()
    // TODO: Implement connect wallet functionality
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  const handleSelectChain = (selectedValue: ChainOption | null) => {
    setSelectedChain(selectedValue)
  }

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="mb-6">
            <Select
              options={options}
              value={selectedChain?.value || ''}
              onChange={handleSelectChain}
            />
          </div>
          <div>
            <h1>Connect Wallet</h1>
            <ButtonTwo chainName="wasmd" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyModal
