import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div className="w-full min-h-screen bg-gray-900">
				<Navbar />
				Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
			</div>
		);
	}

	return <Link href="/api/auth/login">Login</Link>;
}
