import Head from 'next/head'
import { SideNavBar } from '../packages/ui/src/components/SideNavBar'
import { TopAppBar } from '../packages/ui/src/components/TopAppBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <Head>
        <title>ClientHub</title>
      </Head>
      <div className="flex">
        <aside className="w-64">
          <SideNavBar />
        </aside>
        <div className="flex-1">
          <TopAppBar />
          <main className="p-6">Welcome to ClientHub — Dashboard coming soon.</main>
        </div>
      </div>
    </div>
  )
}
