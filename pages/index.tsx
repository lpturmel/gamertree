import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
	const { user, error, isLoading } = useUser();
	const router = useRouter();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		router.push("/me");
	}

	return <Link href="/api/auth/login">Login</Link>;
}
