import { Button, HStack, Stack, Text, Box } from '@chakra-ui/react'
import { useChainWallet } from '@cosmos-kit/react'

const Wallets = () => {
  const context1 = useChainWallet('wasmd', 'keplr-extension', false)
  const context2 = useChainWallet('wasmd', 'keplr-mobile', false)
  return (
    <div>
      {[context1, context2].map(({ username, connect, wallet }) => (
        <div key={wallet.name}>
          <p>{username || '--'}</p>
          <button onClick={connect}>Connect {wallet.prettyName}</button>
        </div>
      ))}
    </div>
  )
}

export default Wallets
