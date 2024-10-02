import {Box, Button, TextArea, TextField} from "@radix-ui/themes";
import React from "react";

function page() {
	return (
		<Box className="max-w-xl space-y-3">
			<TextField.Root placeholder="Search the docs…">
				<TextField.Slot></TextField.Slot>
			</TextField.Root>
			<TextArea placeholder="Reply to comment…" />
			<Button>Submit</Button>
		</Box>
	);
}

export default page;
