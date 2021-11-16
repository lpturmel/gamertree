import { UserProfile } from "@auth0/nextjs-auth0"

export interface Profile extends UserProfile {
    public_username?: string;

}
