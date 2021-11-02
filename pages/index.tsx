import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div className="w-full min-h-screen bg-gray-900">
				<Navbar />
				Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
			</div>
		);
	}

	return <a href="/api/auth/login">Login</a>;
}
