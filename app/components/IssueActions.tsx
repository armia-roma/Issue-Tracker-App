import {Button} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueActions() {
	return (
		<div className="mb-5">
			<Button>
				<Link href="Issues/new">New Issue</Link>
			</Button>
		</div>
	);
}
export default IssueActions;
