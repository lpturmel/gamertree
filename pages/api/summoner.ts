import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { constructApiUrl, leagueRegions } from "../../league/utils";
import { RiotRegions } from "../../types/entities/League";

const summoner = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({
                error: "Method not allowed",
            });
        }

        if (!req.query.region || !req.query.summoner_name) {
            return res.status(400).json({
                error: "Missing required parameters",
            });
        }

        const { region, summoner_name } = req.query;

        if (!leagueRegions.some((el) => el.value === (region as RiotRegions))) {
            return res.status(400).json({
                error: "Invalid region",
            });
        }
        const url = constructApiUrl(
            region as RiotRegions,
            `/summoners/by-name/${summoner_name}`
        );

        const { data } = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-Riot-Token": process.env.RIOT_API_KEY,
            },
        });

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            error: error.message,
        });
    }
};

export default summoner;
