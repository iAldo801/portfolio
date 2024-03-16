"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

interface Props {
  children?: ReactNode
}

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  </QueryClientProvider>
)

export default QueryWrapper