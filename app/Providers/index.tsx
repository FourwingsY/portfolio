import ClientSideProviders from "./Providers.client"
import ServerSideProviders from "./Providers.server"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ServerSideProviders>
      <ClientSideProviders>{children}</ClientSideProviders>
    </ServerSideProviders>
  )
}
