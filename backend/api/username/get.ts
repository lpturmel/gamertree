import { NextApiRequest, NextApiResponse } from "next";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { isUsernameTaken } from "../../db/profile";

const get = async (
    req: NextApiRequest,
    res: NextApiResponse,
    client: DocumentClient
) => {
    try {
        const username = req.query.username;

        if (!username) {
            return res.status(400).json({
                error: "Missing username in querystring",
            });
        }
        const isTaken = await isUsernameTaken(username as string, client);

        if (isTaken) {
            return res.status(403).json({
                error: "Username taken",
            });
        }
        return res.json({
            username,
        });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};
export default get;
