import { createSignal, DEV, JSX, onCleanup, ParentProps } from "solid-js";
import { open, setOpen, SettingsContext } from "./settings_ctx";
import * as tauri from "~/api/tauri";
import { A } from "@solidjs/router";
import Button from "./ui/Button";
import ButtonBack from "./ui/ButtonBack";
import LinkButton from "./ui/LinkButton";
import ButtonNotRecommended from "./ui/ButtonNotRecommended";

export { setOpen, SettingsContext };

export const SettingsProvider = (props: ParentProps) => <SettingsContext.Provider value={{ value: [open, setOpen] }}>{props.children}</SettingsContext.Provider>;
enum SettingsPage {
    Account,
    Themes,
    Plugins,
    About,
    Licenses,
    Routes,
    Components,
    Messages
}

const [page, setPage] = createSignal(SettingsPage.Account);

enum TransitionState {
    None,
    BeforeRun,
    Running
}

const Pages = {
    // User Settings
    [SettingsPage.Account]: () => "coming soon",
    [SettingsPage.Themes]: () => <div>
        <h1 class="text-3xl font-bold">Themes</h1>
        <h3 class="text-xl mb-2">Manage your themes and custom styles for Echoir.</h3>
        <div class="rounded-lg border px-2 py-1.5 border-white/25 w-fit">
            <h3 class="text-sm text-muted font-bold mb-1">Actions</h3>
            <div class="flex gap-2">
                <Button slim>test</Button>
                <Button slim>test again</Button>
            </div>
        </div>
    </div>,
    // Miscellaneous
    [SettingsPage.About]: () => {
        const [curr, setCurr] = createSignal(0);
        const [last, setLast] = createSignal(0);
        const [state, setState] = createSignal(TransitionState.None);
        const messages = ["It's time to ditch Discord and go with Echoir.", "Made by developers, tailored for you.", "Optimized for minimal CPU/RAM usage.", "Private is private."];
        const interval = setInterval(() => {
            const next = (curr() + 1) % messages.length;
            setLast(curr());
            setCurr(next);
            setState(TransitionState.BeforeRun);
            setTimeout(() => {
                setState(TransitionState.Running);
                setTimeout(() => setState(TransitionState.None), 1000)
            }, 1000);
        }, 3000);
        onCleanup(() => clearInterval(interval));
        return <div class="flex flex-col gap-2 justify-center items-center w-full h-full">
            <svg viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 mb-1" aria-label="Echoir logo">
                <path d="M12.1783 19.6855L6.27313 19.6939C6.25048 19.6928 6.204 19.713 6.18135 19.7118L1.75304 19.7069L1.70775 19.7045C1.43596 19.6903 1.22254 19.4292 1.21413 19.1563L1.21137 1.44135L1.21374 1.39605C1.22799 1.12426 1.49018 0.888177 1.76196 0.902421L5.89584 0.891962L5.98643 0.89671L12.0275 0.895362L12.0728 0.897736C12.3446 0.911979 12.5807 1.17418 12.5891 1.44715L12.5637 5.39758L12.5614 5.44288C12.5471 5.71467 12.2849 5.95075 12.012 5.95916L6.72064 5.95438L6.73181 7.90813L10.7859 8.1206C11.0577 8.13485 11.3176 8.37558 11.3021 8.67002L11.2998 8.71531L11.0729 12.1782C11.0336 12.4941 10.7941 12.7314 10.477 12.7148L6.71734 12.5178L6.7202 14.6301L12.2392 14.6241L12.2845 14.6264C12.5789 14.6419 12.815 14.9041 12.8007 15.1758L12.7528 19.1251C12.7373 19.4195 12.4966 19.6794 12.1783 19.6855Z" fill="white" />
                <path d="M26.144 8.03766L25.0781 10.782C24.9874 11.0541 24.7379 11.2809 24.4658 11.2809C24.375 11.2809 24.2617 11.2356 24.1709 11.1675C23.7627 10.8273 22.9689 10.5778 22.1751 10.5778C21.5855 10.5778 19.6124 10.7139 19.6124 13.186C19.6124 14.7056 20.701 15.7035 22.1751 15.7035C23.1504 15.7035 24.2843 15.2726 25.3729 14.2747C25.509 14.1386 25.7131 14.0252 25.9173 14.0252C26.076 14.0252 26.2574 14.1159 26.4162 14.3881C26.8244 15.1592 27.0966 15.5675 27.4595 16.3159C27.5275 16.452 27.5729 16.6107 27.5729 16.7695C27.5729 17.0417 27.4595 17.2912 27.1873 17.5633C25.3503 19.3097 23.173 20.0808 21.1319 20.0808C17.3671 20.0808 14.0332 17.4499 14.0332 13.4582C14.0332 8.37786 18.0928 6.31396 21.8349 6.31396C24.3524 6.31396 26.1667 7.31189 26.1667 7.87889C26.1667 7.92425 26.1667 7.99229 26.144 8.03766Z" fill="white" />
                <path d="M44.2539 18.0624L42.0993 19.8315C41.8499 20.0356 41.6231 20.1036 41.4189 20.1036C41.3282 20.1036 37.1325 19.3325 37.1325 14.7284C37.1325 11.9841 35.8625 11.0089 34.2295 11.0089H34.1161V19.2418C34.1161 19.5139 33.912 19.718 33.6626 19.718H29.1267C28.8545 19.718 28.6504 19.5139 28.6504 19.2418V0.689417C28.6504 0.439936 28.8545 0.213135 29.1267 0.213135H33.6626C33.912 0.213135 34.1161 0.439936 34.1161 0.689417V6.58625C34.3883 6.56357 34.6605 6.56357 34.9099 6.56357C39.1737 6.56357 42.5756 9.10375 42.6436 13.5944C42.6663 15.0686 42.9611 16.2026 44.0724 17.0872C44.2085 17.2006 44.458 17.4274 44.458 17.6768C44.458 17.7902 44.4126 17.9263 44.2539 18.0624Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1802 20.1035C54.4006 20.1035 58.8912 17.6314 58.8912 13.2088C58.8912 10.2603 56.7366 6.33667 51.7245 6.33667C47.7329 6.33667 44.2402 8.76345 44.2402 13.4356C44.2402 17.4273 47.4834 20.1035 51.1802 20.1035ZM51.7249 15.7717C53.3352 15.7717 54.0609 14.4563 54.0609 13.1635C54.0609 12.7326 53.9702 10.5326 51.6569 10.5326C49.7518 10.5326 49.2075 12.1429 49.2075 13.1635C49.2075 14.7284 50.4322 15.7717 51.7249 15.7717Z" fill="white" />
                <path d="M65.5444 19.7318L61.0028 19.7209L60.9575 19.7185C60.7084 19.7055 60.5379 19.4921 60.5283 19.2418L60.5401 8.18204C60.5544 7.91026 60.7463 7.71591 61.0192 7.70751L65.5608 7.71841L65.6061 7.72079C65.8326 7.73266 66.0257 7.94718 66.0138 8.17367L66.0008 19.2561L65.9984 19.3014C65.9866 19.5279 65.7721 19.721 65.5444 19.7318ZM65.5444 19.7318L61.0028 19.7209L60.9575 19.7185C60.7084 19.7055 60.5379 19.4921 60.5283 19.2418L60.5401 8.18204" fill="white" />
                <path d="M63.1688 6.12121C64.7256 6.12121 65.9941 4.85265 65.9941 3.2958C65.9941 1.71972 64.7256 0.451172 63.1688 0.451172C61.5927 0.451172 60.3242 1.71972 60.3242 3.2958C60.3242 4.85265 61.5927 6.12121 63.1688 6.12121Z" fill="white" />
                <path d="M73.2421 19.8154L68.7238 19.7298C68.4523 19.7108 68.2378 19.5282 68.2553 19.2781L68.3798 8.39368C68.3973 8.14352 68.6155 7.9493 68.8643 7.9667L71.4975 8.02514C72.744 7.75619 73.9321 7.67168 75.0633 7.75079C75.8325 7.80458 76.5733 7.94017 77.2645 8.13514C77.598 8.24226 77.7221 8.41852 77.7046 8.66868C77.6987 8.75206 77.6703 8.83387 77.6404 8.93652L76.7787 11.83C76.6905 12.1171 76.454 12.2472 76.1825 12.2282C76.1146 12.2235 76.0256 12.1963 75.9366 12.1691C75.5819 12.0396 75.2016 11.9501 74.817 11.9232C74.5003 11.9011 74.1806 11.9206 73.8128 11.9787L73.7267 19.3884L73.7237 19.4301C73.7077 19.6594 73.491 19.8328 73.2421 19.8154Z" fill="white" />
            </svg>
            <h3 class="text-xl h-7 relative w-full overflow-hidden">
                {state() !== TransitionState.None && <span class={`transition-transform duration-1000 w-full flex justify-center absolute left-0 top-0 ${state() === TransitionState.BeforeRun ? "translate-y-0" : "-translate-y-full"}`}>{messages[last()]}</span>}
                <span class={`transition-transform duration-1000 w-full flex justify-center absolute left-0 top-0 ${state() === TransitionState.BeforeRun ? "translate-y-full invisible" : "translate-y-0"}`}>{messages[curr()]}</span>
            </h3>
            <div class="mt-2">
                crafted with &lt;3 by{" "}
                <a href="https://github.com/WorriedArrow" target="_blank" rel="noopener noreferrer" class="text-brand underline">arrow</a>,{" "}
                <a href="https://github.com/CurrentlyEmilia" target="_blank" rel="noopener noreferrer" class="text-brand underline">emilia</a>,{" "}
                <a href="https://github.com/n1d3v" target="_blank" rel="noopener noreferrer" class="text-brand underline">pat</a>, and{" "}
                <a href="https://github.com/echoir-oss" target="_blank" rel="noopener noreferrer" class="text-brand underline">contributors</a>!
            </div>
            <div class="mt-[-5px] text-sm text-muted">
                Echoir is{" "}
                <a href="https://github.com/echoir-oss" target="_blank" rel="noopener noreferrer" class="text-brandDark underline">open source</a> and built on <span onClick={() => setPage(SettingsPage.Licenses)} class="text-brandDark underline cursor-pointer">open source software</span>.
            </div>
        </div>
    },
    [SettingsPage.Licenses]: () => <div>
        <h1 class="text-3xl font-bold">Licenses</h1>
        <h3 class="text-xl">Review the licenses of software and libraries used by Echoir.</h3>
        <div class="flex flex-col">
            <div>
                <span class="font-bold">Echoir</span> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/nksaraf/vinxi" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">Vinxi</a> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">Vite</a> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/nitrojs/nitro" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">Nitro</a> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">SolidJS</a> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">TailwindCSS</a> / <span class="text-white/70">MIT license</span>
            </div>
            <div>
                <a href="https://github.com/tauri-apps/tauri" target="_blank" rel="noopener noreferrer" class="text-brand underline font-bold">Tauri</a> / <span class="text-white/70">MIT/Apache 2.0 license</span>
            </div>
        </div>
    </div>,
    // Developer
    [SettingsPage.Routes]: () => <div>
        <h1 class="text-3xl font-bold">Routes</h1>
        <h3 class="text-xl">Below is a list of a bunch of routes.</h3>
        <div class="flex flex-col gap-2">
            <A href="/" class="underline text-brand">Home</A>
            <A href="/notfounderror" class="underline text-brand">Not Found Error</A>
            <A href="/error" class="underline text-brand">UI Error / Component Crash</A>
        </div>
    </div>,
    [SettingsPage.Components]: () => <div>
        <h1 class="text-3xl font-bold">Components</h1>
        <h3 class="text-xl">Below is a list of common UI components (<code>components/ui</code>).</h3>
        <div class="flex flex-col gap-2 *:w-max">
            <Button onClick={() => console.log("Button clicked!")}>{"<Button />"}</Button>
            <LinkButton href="/" onClick={() => setOpen(false)}>{"<LinkButton />"}</LinkButton>
            <ButtonNotRecommended onClick={() => console.log("Button clicked!")}>{"<ButtonNotRecommended />"}</ButtonNotRecommended>
            <ButtonBack onClick={() => console.log("Button clicked!")}>{"<ButtonBack />"}</ButtonBack>
        </div>
    </div>,
    // Customization
    [SettingsPage.Plugins]: () => <div>
        <h1>hi!!! this is still a wip arrow please add something here and a button for 3rd party plugins kthxbyeeee</h1>
        <div class="drop-shadow-lg">
            <div class="warning-box rounded-md flex flex-col items-center justify-center text-center p-4 w-[500px] bg-layer">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 41L24.5 8L6 41H43ZM25.4667 30.124L25.6333 18H23.3667L23.5333 30.124H25.4667ZM23.4417 34.5635C23.7361 34.8545 24.0889 35 24.5 35C24.7778 35 25.0278 34.9341 25.25 34.8023C25.4778 34.6651 25.6583 34.4838 25.7917 34.2587C25.9305 34.0336 26 33.7865 26 33.5174C26 33.1111 25.8528 32.7624 25.5583 32.4714C25.2639 32.1804 24.9111 32.0349 24.5 32.0349C24.0889 32.0349 23.7361 32.1804 23.4417 32.4714C23.1472 32.7624 23 33.1111 23 33.5174C23 33.9238 23.1472 34.2724 23.4417 34.5635Z" fill="white"/>
                </svg>
                <h2 class="text-lg font-bold mb-1">Hey, watch out!</h2>
                <p class="mb-1">3rd-party plugins haven't been verified by the Echoir team and could be risky. If you're unsure, it's best not to continue. If you're confident in what you're doing, proceed with a bit of caution. If you're a developer, you can test your plugins here to make sure everything works as intended.</p>
                <A href="https://example.com" class="text-linkColor mb-2">More information can be found here</A> {/* Please replace this with an actual URL at some point! */}
                <div class="button-box-warning flex flex-row gap-1">
                    <ButtonBack onClick={() => console.log("Button clicked!")}>{"Go back"}</ButtonBack>
                    <ButtonNotRecommended onClick={() => console.log("Button clicked!")}>{"Continue"}</ButtonNotRecommended>
                </div>
            </div>
        </div>
    </div>,
    [SettingsPage.Messages]: () => <div>
        <p>work in progress</p>
    </div>
} satisfies Record<SettingsPage, () => JSX.Element>;

export default function Settings(): JSX.Element {
    const listener = (ev: KeyboardEvent) => {
        if(ev.key === "Escape") {
            ev.preventDefault();
            setOpen(false);
        }
    };

    const Item = (props: ParentProps<{ page: SettingsPage }>) => 
        <div
            class={`settings-item cursor-pointer ${page() === props.page ? "bg-layer text-white" : "bg-transparent text-white/80"} rounded-md transition-colors px-2 py-1`}
            onClick={() => setPage(props.page)}
        >
            {props.children}
        </div>;
    const Section = (props: ParentProps) => <div class="settings-section-title text-sm text-muted font-semibold px-2 mb-1">{props.children}</div>;
    const Separator = () => <div class="settings-separator border-t-white/10 border-t m-2" />;
    const SubItem = (props: ParentProps<{ page: SettingsPage }>) => 
        <div
            class={`settings-item cursor-pointer ${page() === props.page ? "bg-layer text-white text-xs" : "bg-transparent text-white/60 text-xs"} rounded-md transition-colors px-2 py-1`}
            onClick={() => setPage(props.page)}
        >
            {props.children}
        </div>;

    const Settings = {
        Item,
        SubItem,
        Section,
        Separator
    };

    document.addEventListener("keyup", listener);
    onCleanup(() => document.removeEventListener("keyup", listener));

    return <div class={`settings fixed flex gap-4 w-screen justify-center top-14 bg-bg h-[calc(100vh-3.5rem)] px-3 pb-3 z-30 transition-all ease-out duration-200 ${open() ? "opacity-100 scale-100" : "opacity-0 scale-150 pointer-events-none"}`}>
        <aside class="settings-nav flex flex-col rounded-xl bg-bgLayer min-w-64 h-full p-4">
            <Settings.Section>User Settings</Settings.Section>
            <Settings.Item page={SettingsPage.Account}>Account</Settings.Item>
            <Settings.Separator />
            <Settings.Section>Customization</Settings.Section>
            <Settings.Item page={SettingsPage.Themes}>Themes</Settings.Item>
            <Settings.Item page={SettingsPage.Messages}>Messages</Settings.Item>
            <Settings.Item page={SettingsPage.Plugins}>Plugins</Settings.Item>
            <Settings.Separator />
            <Settings.Section>Miscellaneous</Settings.Section>
            <Settings.Item page={SettingsPage.About}>About Echoir</Settings.Item>
            <Settings.Item page={SettingsPage.Licenses}>Licenses</Settings.Item>
            <Settings.Separator />
            {DEV && <>
                <Settings.Section>Developer</Settings.Section>
                <Settings.Item page={SettingsPage.Routes}>Routes</Settings.Item>
                <Settings.Item page={SettingsPage.Components}>Components</Settings.Item>
                <Settings.Separator />
            </>}
            <div class="settings-version-info text-xs text-white/50 mb-1 px-2">
                <p>Echoir {tauri.appVersion}{DEV && "@dev"} ({COMMIT_HASH})</p>
                <p>Tauri {tauri.version}</p>
                <p>System: {tauri.systemInfo}</p>
            </div>
        </aside>
        <div class="settings-page w-full rounded-xl p-4 bg-bgLayer h-full overflow-x-hidden overflow-y-auto">
            {Pages[page()]()}
        </div>
    </div>
}