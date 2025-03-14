import { useEffect, useState } from "react";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseAllSettled = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [message, setMessage] = useState("");

	// === THEN SYNTAX
	// useEffect(() => {
	// 	Promise.allSettled([tools.getJobs(), tools.getEmployees()])
	// 		.then((results) => {
	// 			let total = 0;
	// 			results.forEach((result) => {
	// 				if (result.status === 'fulfilled') {
	// 					total += result.value.length;
	// 				}
	// 			})
	// 			setTotalItems(total);
	// 		})
	// 		.catch((err: unknown) => {
	// 			setMessage(
	// 				`Error fetching jobs and employees: ${
	// 					(err as Error).message
	// 				}`
	// 			);
	// 		});
	// }, []);

	useEffect(() => {
		(async () => {
			try {
				const results = await Promise.allSettled([
					tools.getJobs(),
					tools.getEmployees(),
				]);
				let total = 0;
				results.forEach((result) => {
					if (result.status === "fulfilled") {
						total += result.value.length;
					}
				});
				setTotalItems(total);
			} catch (err: unknown) {
				setMessage(
					`Error fetching jobs and employees: ${
						(err as Error).message
					}`
				);
			}
		})();
	}, []);
	return (
		<>
			<h2 className="appMessage">
				Promise.allSettled returns all promise results with a status on each if it is resolved or not.
			</h2>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<WaitUntilLoaded total={totalItems}>
				<p>There are {totalItems} items.</p>
			</WaitUntilLoaded>
		</>
	);
};
