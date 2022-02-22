export interface Contact {
    id: number;
    login: string;
    avatar_url: string;
    created_at: string;
    name: string;
    location: string;
    twitter_username: string;
    blog: string;
    public_repos: number;
    followers: number;
    following: number
}
//import the JSON data and tie it to the  HTML