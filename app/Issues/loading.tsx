import {Skeleton, Table} from "@radix-ui/themes";
import React from "react";
import IssueActions from "../components/IssueActions";

function loading() {
	const issues = [1, 2, 3, 4, 5];
	return (
		<div>
			<IssueActions></IssueActions>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="hidden md:table-cell">
							Status
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className="hidden md:table-cell">
							Created
						</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{issues.map((issue) => (
						<Table.Row key={issue}>
							<Table.Cell>
								<Skeleton></Skeleton>
								<div className="block md:hidden">
									<Skeleton></Skeleton>
								</div>
							</Table.Cell>
							<Table.Cell className="hidden md:table-cell">
								<Skeleton></Skeleton>
							</Table.Cell>
							<Table.Cell className="hidden md:table-cell">
								<Skeleton></Skeleton>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	);
}

export default loading;
