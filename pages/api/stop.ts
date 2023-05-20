import { NextApiRequest, NextApiResponse } from "next";
import { discordClient } from "@/lib/discordClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!discordClient.isLoggedOut()) {
    console.log('shutting down')
    discordClient.logout()
  }
  res.status(200).json({ status: "Bot is stopped." });
};