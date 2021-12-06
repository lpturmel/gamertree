import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async (req: any, res: NextApiResponse) => {
    const session = await getSession({ req });
    res.status(200).json(session);
};
