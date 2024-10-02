"use client";
import {Box, Button, TextArea, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
function page() {
	return (
		<Box className="max-w-xl space-y-3">
			<TextField.Root placeholder="Search the docs…">
				<TextField.Slot></TextField.Slot>
			</TextField.Root>
			<TextArea placeholder="Reply to comment…" />
			<SimpleMDE></SimpleMDE>
			<Button>Submit</Button>
		</Box>
	);
}

export default page;
