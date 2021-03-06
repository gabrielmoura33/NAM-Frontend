import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: UserProps;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface UserProps {
  id: number;
  email: string;
  created_at: Date;
  name: string;
  registerType: number;
  updated_at: Date;
}
interface AuthContextData {
  user: UserProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@NAM:token');
    const user = localStorage.getItem('@NAM:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@NAM:token', `Bearer ${token}`);
    localStorage.setItem('@NAM:user', JSON.stringify(user));
    setData({ token: `Bearer ${token}`, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NAM:token');
    localStorage.removeItem('@NAM:user');
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
