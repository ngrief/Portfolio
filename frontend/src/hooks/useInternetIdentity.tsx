import { createContext, useContext, ReactNode } from 'react';

interface InternetIdentityContextType {
  identity: null;
  login: () => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const InternetIdentityContext = createContext<InternetIdentityContextType>({
  identity: null,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false
});

export function InternetIdentityProvider({ children }: { children: ReactNode }) {
  return (
    <InternetIdentityContext.Provider value={{
      identity: null,
      login: async () => {},
      logout: () => {},
      isAuthenticated: false
    }}>
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  return useContext(InternetIdentityContext);
}
