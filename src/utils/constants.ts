import { ClientRouter, AppRouter } from "../App";

export const APPS = [
    {
        subdomain: "www",
        app: AppRouter,
        main: true
    },
    {
        subdomain: "client1",
        app: ClientRouter,
        main: false
    }
]