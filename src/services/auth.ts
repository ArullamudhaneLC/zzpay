import axios from 'axios';
import { LoginCredentials, AuthResponse } from '../types/auth';

// Test credentials
const TEST_USERS = {
  '9876543210': {
    username: 'user123',
    name: 'Test User',
    id: 'user-123'
  },
  '9898989898': {
    username: 'admin',
    name: 'Admin User',
    id: 'admin-123'
  }
};

// Mock API responses for development
export async function verifyPhone(phone: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = TEST_USERS[phone];
      if (user) {
        resolve({ data: { username: user.username } });
      } else {
        reject(new Error('Invalid phone number'));
      }
    }, 500);
  });
}

export async function loginUser(credentials: LoginCredentials) {
  return new Promise<{ data: AuthResponse }>((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = credentials;
      if (username === 'user123' && password === 'password123') {
        resolve({
          data: {
            user: {
              id: 'user-123',
              username: 'user123',
              name: 'Test User'
            }
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
}

export async function loginAdmin(credentials: LoginCredentials) {
  return new Promise<{ data: AuthResponse }>((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = credentials;
      if (username === 'admin' && password === 'admin123') {
        resolve({
          data: {
            user: {
              id: 'admin-123',
              username: 'admin',
              name: 'Admin User'
            }
          }
        });
      } else {
        reject(new Error('Invalid admin credentials'));
      }
    }, 500);
  });
}