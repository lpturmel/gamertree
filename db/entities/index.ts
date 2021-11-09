import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Entity } from "../../types/Entity";

/**
 * Retrieve entities by user id
 */
export const getEntities = async (user_id: string, db: DocumentClient) => {
	const results = await db
		.query({
			TableName: process.env.TABLE_NAME,

			KeyConditionExpression:
				"user_id = :user_id and begins_with(SK, :entity_prefix)",
			ExpressionAttributeValues: {
				":user_id": user_id,
				":entity_prefix": "entity#",
			},
		})
		.promise();

	return results.Items as Entity[];
};

/**
 * Create a new entity
 */
export const createEntity = async (
	user_id: string,
	entity: Entity,
	db: DocumentClient
) => {
	const result = await db
		.put({
			TableName: process.env.TABLE_NAME,
			Item: {
				user_id,
				SK: "entity#" + entity.entity_id,
				...entity,
			},
		})
		.promise();
	return { ...entity };
};
