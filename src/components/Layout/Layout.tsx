import { Header, Footer } from 'components/'
import { LayoutProps } from 'components/Layout/Layout.props'

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
