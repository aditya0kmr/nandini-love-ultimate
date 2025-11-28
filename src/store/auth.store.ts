import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: localStorage.getItem('nandini-auth') === 'true',
  
  login: (password: string) => {
    if (password === 'nanniii' || password === 'nanniii@aditya') {
      localStorage.setItem('nandini-auth', 'true')
      set({ isAuthenticated: true })
      return true
    }
    return false
  },
  
  logout: () => {
    localStorage.removeItem('nandini-auth')
    set({ isAuthenticated: false })
  }
}))
