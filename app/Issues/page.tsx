import React from "react";
import {Button} from "@radix-ui/themes";
import Link from "next/link";
function IssuesPage() {
	console.log("hi");
	return (
		<div>
			<Button>
				<Link href="Issues/new">New Issue</Link>
			</Button>
		</div>
	);
}

export default IssuesPage;
