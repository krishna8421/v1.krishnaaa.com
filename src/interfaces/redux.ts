import store from "@config/store";

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
