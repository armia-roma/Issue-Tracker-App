"use client";
import {Box, Button, Callout, TextArea, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
interface Form {
	title: string;
	description: string;
}

function page() {
	const router = useRouter();
	const {register, control, handleSubmit} = useForm<Form>();
	const [error, setError] = useState("");
	return (
		<div className="max-w-xl">
			{error && (
				<Callout.Root className="mb-5" color="red">
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			)}
			<form
				className=" space-y-3"
				onSubmit={handleSubmit(async (data) => {
					try {
						await axios.post("/api/issues", data);
						router.push("/Issues");
					} catch (error) {
						setError("unexpected error hab");
					}
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
						<SimpleMDE
							placeholder="Description"
							{...field}
						></SimpleMDE>
					)}
				></Controller>
				<Button>Submit</Button>
			</form>
		</div>
	);
}

export default page;
