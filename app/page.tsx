import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
export default function Home() {
	return (
		<main className="flex flex-row items-center justify-around p-24 bg-red-200 rounded-lg">
			<Link href="/user">User Page</Link>
			<Card />
		</main>
	);
}
