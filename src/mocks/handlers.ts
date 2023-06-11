import { rest } from "msw";

import type { Note } from "../features/notes/type";

const notes: Note[] = [{ id: "1", content: "test", date: new Date() }];

export const handlers = [
  // 할일 목록
  rest.get("/notes", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(notes));
  }),
];
