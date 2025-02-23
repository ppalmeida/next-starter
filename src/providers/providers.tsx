import JotaiProvider from './jotai-provider'
import ReactQueryProvider from './react-query-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type ProvidersProps = {
  children: React.ReactNode
}
const Providers = ({ children }: ProvidersProps) => (
  <>
    <ReactQueryProvider>
      <JotaiProvider>{children}</JotaiProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  </>
)

export default Providers
