import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'name', type: 'text' },
        email: { label: 'Password', type: 'email' },
      },
      async authorize(credentials) {
        const path =
          credentials?.type === 'register' ? 'auth/signup' : 'auth/login';

        const res = await fetch(`${process.env.BACKEND_URL}/${path}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            name: credentials?.name,
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const json = await res.json();
        if (!res.ok) {
          throw new Error(json?.message);
        }
        const user = json;
        return !!user ? user : null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ token }) {
      if (token) {
        console.log(token);
        return {
          ...token,
          user: token.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          error: token.error,
        };
      }
    },
    async jwt({ token, user }) {
      if (typeof user !== 'undefined') {
        console.log(user);
        return { ...user.data };
      }

      if (Date.now() < token.exp * 1000) {
        return token;
      }

      try {
        const res = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token.refreshToken,
          },
        });

        if (!res.ok) throw Error();

        const refreshedTokens = (await res.json()).data;

        if (!refreshedTokens) throw Error();

        return {
          ...token,
          accessToken: refreshedTokens.accessToken,
          refreshToken: refreshedTokens.refreshToken,
          expires_at: Math.floor(
            Date.now() / 1000 + parseInt(refreshedTokens.expiresIn)
          ),
        };
      } catch (e) {
        return { ...token, error: 'RefreshAccessTokenError' };
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
