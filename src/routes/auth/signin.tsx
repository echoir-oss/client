import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Nav from "~/components/Nav";
import Button from "~/components/ui/Button";

enum State {
    Email,
    Password,
    LoadingLogin,
    TwoFA,
    LoadingConfirmation,
}

const Placeholders = {
    [State.Email]: "Email address",
    [State.Password]: "Password",
    [State.LoadingLogin]: "",
    [State.TwoFA]: "2FA code",
    [State.LoadingConfirmation]: "",
}

export default function SignIn() {
    const [state, setState] = createSignal(State.Email);
    return <>
        <Title>Sign in / Echoir</Title>
        <Nav blank />
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="font-bold text-4xl mb-0.5">Sign in to Echoir</h1>
            <h3 class="text-muted mb-1">Welcome back, adventurer!</h3>
            <input placeholder={Placeholders[state()]} class="bg-layer text-white text-sm py-1.5 px-3 mb-3 w-64 rounded-lg outline-none placeholder:text-muted shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] focus:outline-none focus:ring-0 focus:border-transparent transition-shadow duration-200" />
            <Button onClick={() => setState((state() + 1) % 5)}>{(state() === State.LoadingLogin || state() === State.LoadingConfirmation) ? "Loading" : "Next"}</Button>
        </div>
    </>
}