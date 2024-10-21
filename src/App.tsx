
import { PropsWithChildren } from 'react'
import { Layout } from './components'

function App({children}:PropsWithChildren) {
 

  return (
 <Layout>
  {children}
 </Layout>
  )
}

export default App
