import { getSession } from "next-auth/react";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getEntities } from "../../db/entities";

const get = async (
    req: NextApiRequest,
    res: NextApiResponse,
    client: DocumentClient
) => {
    try {
        const session = await getSession({ req });

        const entities = await getEntities(session.user.email, client);

        res.status(200).json(entities);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

export default get;
