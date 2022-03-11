import Head from 'next/head'
import Articulo from '../components/common/Articulo'
import Sidebar from '../components/common/Sidebar'
import MainLayout from '../components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Sidebar />
    </MainLayout>
  )
}
