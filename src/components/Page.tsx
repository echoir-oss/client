import { createEffect, createResource, ErrorBoundary, JSX, ParentProps, Show, useContext } from "solid-js";
import Nav from "./Nav";
import { Title } from "@solidjs/meta";
import { A, Navigate, useLocation, useNavigate } from "@solidjs/router";
import Settings, { SettingsContext } from "./Settings";
import * as palm from "~/api/palm";

export default function Page(props: ParentProps<{ title: string, noBg?: boolean, unauthed?: boolean }>): JSX.Element {
    useContext(SettingsContext).value[1](false);
    const nav = useNavigate();
    const [me] = createResource(() => palm.user.me());
    if(!props.unauthed) createEffect(() => me.error && nav("/auth/signin"));
    return <ErrorBoundary fallback={err => {
        console.error("Critical UI Error:", err);
        return void useNavigate()("/error");
    }}>
        <Title>{props.title} / Echoir</Title>
        <Nav blank={me.loading} />
        <Show when={!props.unauthed && (me.error || (me() as any)?.message)}>
            <Navigate href="/auth/signin" />
        </Show>
        <Show when={props.unauthed || (me() !== undefined)}>
            <main class={`pt-14 pl-4 pr-3 pb-3 h-screen flex gap-4 transition-transform ease-out duration-200 ${useContext(SettingsContext).value[0]() ? "scale-75" : "scale-100"}`}>
                <div class="server-bar h-full w-16">
                    <A href="/" class="server-button home-button relative flex items-center justify-center h-16 w-16 bg-bgLayer rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14" fill="none" class="home-icon">
                            <path d="M7.98568 0.315064C7.40979 -0.105021 6.59021 -0.105021 6.01432 0.315064L0.589334 4.27243C0.216774 4.54418 0 4.95501 0 5.38926V12.5681C0 13.3589 0.705151 14 1.575 14H3.36618C4.23603 14 4.94118 13.3589 4.94118 12.5681V9.39474C4.94118 8.88606 5.40206 8.47368 5.97059 8.47368H8.02941C8.59793 8.47368 9.05882 8.88606 9.05882 9.39474V12.5681C9.05882 13.3589 9.76397 14 10.6338 14H12.425C13.2949 14 14 13.3589 14 12.5681V5.38926C14 4.95497 13.7832 4.54418 13.4107 4.27243L7.98568 0.315064Z" fill="white" />
                        </svg>
                        <div class={`server-button-indicator ${useLocation().pathname === "/" ? "block" : "hidden"} absolute left-0 h-8 w-1 bg-brand rounded-r-full`}></div>
                    </A>
                </div>
                <div class="dm-list rounded-xl bg-bgLayer min-w-64 h-full"></div>
                <div class={`primary-content p-4 rounded-xl ${props.noBg ? "" : "bg-bgLayer "}w-full h-full`}>
                    {props.children}
                </div>
            </main>
        </Show>
        <Settings />
    </ErrorBoundary>
}