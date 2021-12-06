import { getSession } from "next-auth/react";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteUserEntity, getUserEntity } from "../../db/entities";

const deleteEntity = async (
    req: NextApiRequest,
    res: NextApiResponse,
    client: DocumentClient
) => {
    try {
        const entity_id = req.body.entity_id;

        if (!entity_id) {
            return res.status(400).json({
                error: "entity_id key is required",
            });
        }

        const session = await getSession({ req });

        const deletedEntity = await deleteUserEntity(
            session.user.email,
            entity_id,
            client
        );
        return res.status(200).json(deletedEntity.Attributes);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({ error: error.message });
    }
};

export default deleteEntity;
