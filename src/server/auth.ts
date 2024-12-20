import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: '/',
  domain: process.env.COOKIE_DOMAIN || undefined
};

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6)
});

export async function loginHandler(req: Request, res: Response) {
  try {
    const credentials = loginSchema.parse(req.body);
    const user = await validateUserCredentials(credentials);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set HTTP-only cookie
    res.cookie('auth_token', token, COOKIE_OPTIONS);

    // Return user data (excluding sensitive info)
    res.json({
      user: {
        id: user.id,
        username: user.username,
        name: user.name
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: 'Invalid input', errors: error.errors });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export function logoutHandler(req: Request, res: Response) {
  res.clearCookie('auth_token', {
    ...COOKIE_OPTIONS,
    maxAge: 0
  });
  
  res.json({ message: 'Logged out successfully' });
}

async function validateUserCredentials(credentials: z.infer<typeof loginSchema>) {
  // Implement your actual user validation logic here
  // This is just a placeholder
  return null;
}