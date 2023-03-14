import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { wallets as keplrWallets } from '@cosmos-kit/keplr'
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation'
import { wallets as leapWallets } from '@cosmos-kit/leap'
import { defaultTheme, ChainProvider } from '@cosmos-kit/react'
import { ManagedUIContext } from '@components/ui/context'
import { SignerOptions, WalletModalProps } from '@cosmos-kit/core'
import { chains, assets } from 'chain-registry'
import { wasmd, wasmdAssets } from '../config/wasmd'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  }
  return (
    <>
      <Head />
      <ManagedUIContext>
        <ChainProvider
          chains={[wasmd]}
          assetLists={[wasmdAssets]}
          wallets={[...keplrWallets, ...cosmostationWallets]}
          signerOptions={signerOptions}
          endpointOptions={{
            wasmd: {
              rpc: ['http://localhost:26657'],
            },
          }}
        >
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ChainProvider>
      </ManagedUIContext>
    </>
  )
}
