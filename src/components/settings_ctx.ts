// This file serves as a fix for HMR's strange behavior with Context.
// tl;dr: when the Context.Provider is used in the same file as the createContext call, it'll get mismatched and the Provider will update but not the context export.
// Therefore, when we do useContext(SettingsContext) with the old system, it'll try to look up the old Context which is now invalid and referencing invalidated signals.

import { createContext, createSignal, Signal } from "solid-js";

export const [open, setOpen] = createSignal(false);
export const SettingsContext = createContext({ value: [open, setOpen] as Signal<boolean> });