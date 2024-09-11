import { router, procedure } from "../trpc";
import { z } from "zod";
import { bookRouter } from "./book";

export const appRouter = router({
    book : bookRouter
});

export type AppRouter = typeof appRouter;