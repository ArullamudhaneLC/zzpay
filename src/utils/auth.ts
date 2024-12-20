import axios from 'axios';
import { User, LoginCredentials, AuthResponse } from '../types/auth';
import { apiProxy } from '../config/proxy';

const API_URL = 'https://finovaapay-backend-lk9fu.ondigitalocean.app';

// Configure axios to always send credentials
axios.defaults.withCredentials = true;

// Axios interceptor to handle 401 responses
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      window.dispatchEvent(new CustomEvent('auth:expired'));
    }
    return Promise.reject(error);
  }
);

export async function login(credentials: LoginCredentials): Promise<Number> {
  try {
    console.log(credentials);
    const response = await axios.post<AuthResponse>(
      `/api/user/login`,
      credentials,
      {
        withCredentials: true,
      
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': getCsrfToken(),
        }
      }
    );
    console.log(response);
    
    return response.status;
  } catch (error) {
    throw new Error('Login failed');
  }
}

export async function getUsernameByPhone(phoneNumber: string): Promise<string> {
  try {
    const response = await axios.get('/api/user/login', {
      params: {
        phone_number: phoneNumber,
      },
      withCredentials: true,
    });

    console.log('Response:', response.data);
    return response.data.username; // Adjust this based on your actual API response
  } catch (error) {
    console.error('API call failed:', error);
    throw new Error('Failed to verify phone number');
  }
}

// import axios from 'axios';

// const getUserByPhone = async (phoneNumber) => {
//   try {
//     const response = await axios.get('/api/user/login', {
//       params: {
//         phone_number: phoneNumber,
//       },
//     });
//     console.log(response.data); // Expected to get the response from the backend
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


export async function logout(): Promise<void> {
  try {
    // await axios.post(`/api/user/logout`, {withCredentials: true});
     await axios.get('/api/user/logout', { withCredentials: true }); // Notify backend
      
    
    window.dispatchEvent(new CustomEvent('auth:logout'));
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

export async function getStoredUser(): Promise<number | null> {
  try {
    const response = await axios.get<any>(`/api/user/profile`, {
      withCredentials: true, // Include cookies in the request
    });
    console.log('getStoredUser', response);
    return response.status;
  } catch (error) {
    return null;
  }
}

function getCsrfToken(): string {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
}
