import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
            id: "discord",
            name: "Discord",
            type: "oauth",
            authorization:
                "https://discord.com/api/oauth2/authorize?scope=identify+email",
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me",
        }),
        // ...add more providers here
    ],
    callbacks: {
        jwt: async ({ token, account }) => {
            if (account?.access_token) {
                token.access_token = account.access_token;
            }
            return token;
        },
        session: async ({ token, session }: any) => {
            const imageResponse = await fetch(
                `https://discord.com/api/users/@me`,
                {
                    headers: {
                        Authorization: "Bearer " + token.access_token,
                    },
                }
            );
            const response = await imageResponse.json();
            session.user.id = token.sub;
            session.user.image = `https://cdn.discordapp.com/avatars/${token.sub}/${response.avatar}`;
            return session;
        },
    },
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login",
    },
});
