import React, { ChangeEvent, useMemo, useState } from 'react'
import styles from './Select.module.css'
import { ChainOption, handleSelectChainDropdown } from '../types'
import { useManager } from '@cosmos-kit/react'
import { ChainName } from '@cosmos-kit/core'
import { ChooseChain } from './choose-chain'
interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  value: string
  onChange: (selectedValue: ChainOption | null) => void
  disabled?: boolean
}

const Select: React.FC<Props> = ({
  options,
  value,
  onChange,
  disabled = false,
}) => {
  const { chainRecords, getChainLogo } = useManager()
  const [chainName, setChainName] = useState<ChainName | undefined>('cosmoshub')

  const chainOptions = useMemo(() => {
    return chainRecords.map(
      (chainRecord: { name: ChainName; chain: { pretty_name: string } }) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        }
      }
    )
  }, [chainRecords, getChainLogo])

  const onChainChange: handleSelectChainDropdown = async (selectedValue) => {
    if (selectedValue?.chainName) {
      setChainName(selectedValue.chainName)
      window.localStorage.setItem('selected-chain', selectedValue.chainName)
      onChange(selectedValue)
    } else {
      setChainName(undefined)
      window.localStorage.removeItem('selected-chain')
      onChange(null)
    }
  }

  const chooseChain = (
    <ChooseChain
      chainName={chainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  )

  return (
    <div
      className={`${styles['custom-select']} ${
        disabled ? styles.disabled : ''
      }`}
    >
      <label>
        <span className={styles['selected-option']}>
          {options.find((option) => option.value === value)?.label}
        </span>
        {chooseChain}
        <select value={value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Select
