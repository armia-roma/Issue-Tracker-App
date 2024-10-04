"use client";
import {
	Box,
	Button,
	Callout,
	TextArea,
	TextField,
	Text,
} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {createIssueSchema} from "./../../validationSchemas";
import {z} from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
interface Form {
	title: string;
	description: string;
}

type IssueForm = z.infer<typeof createIssueSchema>;

function page() {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<IssueForm>({
		resolver: zodResolver(createIssueSchema),
	});
	const [error, setError] = useState("");
	const [isSubmiting, setIsSubmiting] = useState(false);
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
						setIsSubmiting(true);
						await axios.post("/api/issues", data);
						router.push("/Issues");
					} catch (error) {
						setIsSubmiting(false);
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
				<ErrorMessage>{errors.title?.message}</ErrorMessage>
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

				<ErrorMessage>{errors.description?.message}</ErrorMessage>
				<Button loading={isSubmiting}>Submit</Button>
			</form>
		</div>
	);
}

export default page;
