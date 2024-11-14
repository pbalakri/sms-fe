// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            username: credentials.username,
            password: credentials.password,
          });

          const user = response.data;

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Login failed:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: 'your-secret-key',
  jwt: {
    secret: 'your-secret-key',
    encryption: true,
  },
});

export { handler as GET, handler as POST };