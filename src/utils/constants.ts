import { Client1Router, Client2Router, AppRouter } from "../App";

export const APPS = [
    {
        subdomain: "www",
        app: AppRouter,
        main: true
    },
    {
        subdomain: "client1",
        app: Client1Router,
        main: false
    },
    {
        subdomain: "client2",
        app: Client2Router,
        main: false
    }
]