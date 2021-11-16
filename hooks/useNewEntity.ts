import axios from "axios";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { Entity } from "../types/Entity";

function useNewEntity<T>(game: "lol" | "wow") {
	const queryClient = useQueryClient();
	return useMutation(
		"new-entity",
		async (entity: T) => {
			const { data } = await axios.post(
				"/api/entities",
				{
					game,
					...entity,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			return data;
		},
		{ onSuccess: (response) => addEntityToCache(response, queryClient) }
	);
}

function addEntityToCache(response: any, queryClient: QueryClient) {
	const entities = queryClient.getQueryData<Entity[]>("entities");

	if (entities) {
		queryClient.setQueryData("entities", [...entities, { ...response }]);
	}
}
export default useNewEntity;
