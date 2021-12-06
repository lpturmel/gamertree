import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getUserProfile } from "../../backend/db/profile";
import client from "../../backend/db/client";

export default async function profile(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({
                error: "Method not allowed",
            });
        }

        const session = await getSession({ req });

        const profile = await getUserProfile(session.user.email, client);

        if (!profile) {
            return res.status(200).json(null);
        }

        return res.status(200).json({
            public_username: profile.public_username,
            user_id: profile.user_id,
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            error: error.message,
        });
    }
}
