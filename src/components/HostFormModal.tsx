import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const EMAIL = 'govindupadhyay85273@gmail.com'

interface HostFormModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function HostFormModal({ isOpen, onClose }: HostFormModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const resetForm = () => {
    setName('')
    setPhone('')
    setStatus('idle')
    setErrorMsg('')
  }

  const handleClose = () => {
    onClose()
    setTimeout(resetForm, 300)
  }

  const validate = () => {
    if (!name.trim()) {
      setErrorMsg('Please enter your name.')
      return false
    }
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!validate()) return

    setStatus('loading')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          _subject: 'New Host Registration — Plugzzy',
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!res.ok) throw new Error('Submission failed')

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 bg-gradient-to-r from-plugzzy-600 to-emerald-500" />

            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              {status === 'success' ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-plugzzy-100">
                    <CheckCircle2 className="h-8 w-8 text-plugzzy-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-plugzzy-950">
                    You're on the list!
                  </h3>
                  <p className="mb-6 text-sm text-gray-600">
                    Thanks, {name}! We'll reach out on {phone} soon to help you
                    list your charger.
                  </p>
                  <button
                    onClick={handleClose}
                    className="rounded-full bg-plugzzy-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-plugzzy-700"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-plugzzy-600 to-emerald-500">
                      <Home className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-plugzzy-950">
                        Become a Host
                      </h3>
                      <p className="text-sm text-gray-500">
                        We'll get in touch to help you get started.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="host-name"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="host-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rahul Sharma"
                        disabled={status === 'loading'}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-plugzzy-500 focus:ring-2 focus:ring-plugzzy-500/20 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="host-phone"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="host-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        disabled={status === 'loading'}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-plugzzy-500 focus:ring-2 focus:ring-plugzzy-500/20 disabled:opacity-60"
                      />
                    </div>

                    {(errorMsg || status === 'error') && (
                      <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        {errorMsg || 'Submission failed. Please try again.'}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-plugzzy-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-plugzzy-600/25 transition-all hover:bg-plugzzy-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Submit — List My Charger'
                      )}
                    </button>
                  </form>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Your details are sent securely. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
