import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Link href="/user">User Page</Link>
			<Card />
		</main>
	);
}
