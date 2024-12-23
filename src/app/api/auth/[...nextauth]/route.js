import { authOptions } from '@/components/auth/auth-option';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
