import { credentailsRouter } from "@/features/credentials/server/routes";
import { createTRPCRouter } from "../init";
import { workflowsRouter } from "@/features/workflows/server/routes";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
  credentials: credentailsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
