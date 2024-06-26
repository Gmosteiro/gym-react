// UserContext.tsx
import React from 'react';
import { User } from '../types/user';

const UserContext = React.createContext<User | null>(null);

export default UserContext;