export interface SideNavBarProps {
  /* TODO: add navigation items shape */
}

export const SideNavBar = (_props: SideNavBarProps) => {
  return (
    <nav className="h-full bg-surfaceLow text-gray-100 p-4">
      <div className="mb-8">
        <div className="text-xl font-semibold">ClientHub</div>
        <div className="text-xs text-gray-400">Design Workspace</div>
      </div>
      <ul>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Dashboard</li>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Clients</li>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Projects</li>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Invoices</li>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Calendar</li>
        <li className="py-2 border-l-4 border-transparent hover:bg-surfaceHigh pl-3">Messages</li>
      </ul>
      <div className="mt-auto pt-6 text-sm text-gray-400">Profile • Settings</div>
    </nav>
  )
}
