export interface TopAppBarProps {
  /* TODO: props for search, user, actions */
}

export const TopAppBar = (_props: TopAppBarProps) => {
  return (
    <header className="w-full bg-surfaceHigh p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <input
          className="bg-surfaceLow px-3 py-2 rounded-md text-sm placeholder-gray-400"
          placeholder="Search clients, projects, invoices..."
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-primary text-black px-4 py-2 rounded-md shadow-indigoGlow">Add New</button>
        <div className="w-8 h-8 rounded-full bg-gray-500" />
      </div>
    </header>
  )
}
