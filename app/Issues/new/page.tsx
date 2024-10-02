"use client";
import {Box, Button, TextArea, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
interface Form {
	title: string;
	description: string;
}

function page() {
	const router = useRouter();
	const {register, control, handleSubmit} = useForm<Form>();
	return (
		<form
			className="max-w-xl space-y-3"
			onSubmit={handleSubmit(async (data) => {
				await axios.post("/api/issues", data);
				router.push("/Issues");
			})}
		>
			<TextField.Root
				placeholder="Search the docs…"
				{...register("title")}
			>
				<TextField.Slot></TextField.Slot>
			</TextField.Root>
			<TextArea placeholder="Reply to comment…" />
			<Controller
				name="description"
				control={control}
				render={({field}) => (
					<SimpleMDE placeholder="Description" {...field}></SimpleMDE>
				)}
			></Controller>
			<SimpleMDE></SimpleMDE>
			<Button>Submit</Button>
		</form>
	);
}

export default page;
