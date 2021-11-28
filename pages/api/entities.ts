import client from "../../backend/db/client";
import getEntities from "../../backend/api/entities/get";
import createEntity from "../../backend/api/entities/post";
import deleteEntity from "../../backend/api/entities/delete";
import { NextApiRequest, NextApiResponse } from "next";

export default async function entities(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            await getEntities(req, res, client);
            break;
        case "POST":
            await createEntity(req, res, client);
            break;
        case "DELETE":
            await deleteEntity(req, res, client);
            break;
        default:
            res.status(405).end();
            break;
    }
}
