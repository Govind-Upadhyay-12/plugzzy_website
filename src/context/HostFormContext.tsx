import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { HostFormModal } from '../components/HostFormModal'

interface HostFormContextValue {
  openHostForm: () => void
  closeHostForm: () => void
}

const HostFormContext = createContext<HostFormContextValue | null>(null)

export function HostFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openHostForm = useCallback(() => setIsOpen(true), [])
  const closeHostForm = useCallback(() => setIsOpen(false), [])

  return (
    <HostFormContext.Provider value={{ openHostForm, closeHostForm }}>
      {children}
      <HostFormModal isOpen={isOpen} onClose={closeHostForm} />
    </HostFormContext.Provider>
  )
}

export function useHostForm() {
  const ctx = useContext(HostFormContext)
  if (!ctx) throw new Error('useHostForm must be used within HostFormProvider')
  return ctx
}
