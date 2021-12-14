import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Entity } from "../../../types/Entity";

const ENTITY_PREFIX = "entity#";
const USERNAME_INDEX_NAME = "public_username-SK-index";

// Get entity of a user by entity id
export const getUserEntity = async (
    user_id: string,
    entity_id: string,
    db: DocumentClient
) => {
    const response = await db
        .query({
            TableName: process.env.TABLE_NAME,

            KeyConditionExpression: "user_id = :user_id and SK = :entity_id",
            ExpressionAttributeValues: {
                ":user_id": user_id,
                ":entity_id": ENTITY_PREFIX + entity_id,
            },
        })
        .promise();

    return response.Items as Entity[];
};

export const getEntitiesByUserName = async (
    username: string,
    db: DocumentClient
) => {
    const response = await db
        .query({
            TableName: process.env.TABLE_NAME,

            KeyConditionExpression:
                "public_username = :username and begins_with(SK, :entity_prefix)",
            ExpressionAttributeValues: {
                ":username": username,
                ":entity_prefix": ENTITY_PREFIX,
            },
            IndexName: USERNAME_INDEX_NAME,
        })
        .promise();

    return response.Items as Entity[];
};

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

// Delete a users' entity by id
export const deleteUserEntity = async (
    user_id: string,
    entity_id: string,
    db: DocumentClient
) => {
    const response = await db
        .delete({
            TableName: process.env.TABLE_NAME,

            Key: {
                user_id,
                SK: ENTITY_PREFIX + entity_id,
            },
            ReturnValues: "ALL_OLD",
        })
        .promise();

    return response;
};

/**
 * Update all user entities public_username to the new username
 */
export const bulkUpdateEntitiesOwner = async (
    user_id: string,
    new_username: string,
    db: DocumentClient
) => {
    const entities = await getEntities(user_id, db);
    const putRequestItems = entities.map((entity) => ({
        PutRequest: {
            Item: {
                ...entity,
                public_username: new_username,
            },
        },
    }));
    console.log(putRequestItems[0].PutRequest.Item);
    const updateResponse = await db
        .batchWrite({
            RequestItems: {
                [process.env.TABLE_NAME]: putRequestItems,
            },
        })
        .promise();
    console.log(updateResponse);
};
