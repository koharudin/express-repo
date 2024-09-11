import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import express, { Request, Response } from "express";
import { type OpenApiMeta } from "trpc-openapi";
const createContext = ({
  req,
  res,
}: {
  req: express.Request;
  res: express.Response;
}) => ({});
type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().meta<OpenApiMeta>().create({
  // transformer: superjson,
});

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
