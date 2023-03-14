import { useState, useEffect } from 'react'
import {
  ChooseChainInfo,
  ChainOption,
  handleSelectChainDropdown,
} from '../types'
import Select from '.'

export function ChooseChain({
  chainName,
  chainInfos,
  onChange,
}: {
  chainName?: string
  chainInfos: ChooseChainInfo[]
  onChange: handleSelectChainDropdown
}) {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>()
  useEffect(() => {
    if (chainName && chainInfos.length > 0)
      setSelectedItem(
        chainInfos.filter((options) => options.chainName === chainName)[0]
      )
    if (!chainName) setSelectedItem(undefined)
  }, [chainInfos, chainName])
  return (
    <Select
      options={chainInfos}
      value={selectedItem?.value || ''}
      onChange={onChange}
    />
  )
}
