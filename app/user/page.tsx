import React from "react";

interface User {
	id: number;
	name: string;
}
const userpage = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
	const users: User[] = await res.json();
	return (
		<div>
			<h1>Users</h1>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
			userpage
		</div>
	);
};

export default userpage;
