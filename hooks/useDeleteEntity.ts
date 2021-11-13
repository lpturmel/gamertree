import axios from "axios";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { Entity } from "../types/Entity";

export const useDeleteEntity = () => {
	const queryClient = useQueryClient();
	return useMutation(
		"delete_item",
		async ({ entity_id }: { entity_id: string }) => {
			const { data } = await axios.delete("/api/entities", {
				data: {
					entity_id,
				},
			});

			return data;
		},
		{
			onSuccess: (response) =>
				removeEntityFromCache(response, queryClient),
		}
	);
};

function removeEntityFromCache(response: Entity, queryClient: QueryClient) {
	const entities = queryClient.getQueryData<Entity[]>("entities");

	if (entities) {
		const newEntities = entities.filter(
			(entity) => entity.entity_id !== response.entity_id
		);
		queryClient.setQueryData("entities", [...newEntities]);
	}
}
