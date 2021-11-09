import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<Layout>
				<Navbar />
				Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
			</Layout>
		);
	}

	return <Link href="/api/auth/login">Login</Link>;
}
