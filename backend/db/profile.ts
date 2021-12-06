import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Profile } from "../../types/Profile";

const PROFILE_PREFIX = "profile#";

export const getUserProfile = async (user_id: string, db: DocumentClient) => {
    const response = await db
        .get({
            TableName: process.env.TABLE_NAME,
            Key: {
                user_id,
                SK: PROFILE_PREFIX,
            },
        })
        .promise();

    return response.Item as Profile;
};

export const createUserProfile = async (
    user_id: string,
    public_username: string,
    db: DocumentClient
) => {
    const response = await db
        .update({
            TableName: process.env.TABLE_NAME,
            Key: {
                user_id,
                SK: PROFILE_PREFIX,
            },
            UpdateExpression: "SET public_username = :public_username",
            ExpressionAttributeValues: {
                ":public_username": public_username,
            },
        })
        .promise();

    return response.Attributes as Profile;
};

export const isUsernameTaken = async (username: string, db: DocumentClient) => {
    const response = await db
        .query({
            TableName: process.env.TABLE_NAME,
            KeyConditionExpression:
                "public_username = :public_username and SK = :profile_prefix",
            ExpressionAttributeValues: {
                ":public_username": username,
                ":profile_prefix": PROFILE_PREFIX,
            },
            IndexName: "public_username-SK-index",
        })
        .promise();

    return response.Items.length > 0;
};
