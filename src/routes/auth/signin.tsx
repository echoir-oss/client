import { Title } from "@solidjs/meta";
import { A, redirect, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import * as palm from "~/api/palm";
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
};

export default function SignIn() {
    const [state, setState] = createSignal(State.Email);
    const [value, setValue] = createSignal("");
    const [error, setError] = createSignal("");
    let email = "";
    let password = "";
    let twoFA = "";
    const nav = useNavigate();
    const update = async () => {
        setError("");
        if (Placeholders[state()] === "") return;
        setState((state() + 1) % 5);
        if (state() === State.Password) {
            email = value();
            setValue("");
        } else if (state() === State.LoadingLogin) {
            password = value();
            setValue("");
            const result = await palm.auth.login(email, password);
            if (!result.success) {
                setError(
                    (result as palm.types.HttpResult<palm.auth.LoginResult>)
                        .$palm.sc === 500
                        ? "Internal server error"
                        : "Incorrect email or password.",
                );
                setState(State.Email);
                return;
            }
            await palm.auth.setToken(result.token!);
            location.href = "/";
        }
    };
    return (
        <>
            <Title>Sign in / Echoir</Title>
            <Nav blank />
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 class="font-bold text-4xl mb-0.5">Sign in to Echoir</h1>
                <h3 class="text-muted mb-1">Welcome back, adventurer!</h3>
                {error() && (
                    <span class="text-red-500 text-sm mb-2">{error()}</span>
                )}
                <form
                    class="contents"
                    onSubmit={(ev) => (ev.preventDefault(), update())}
                >
                    <input
                        placeholder={Placeholders[state()]}
                        value={value()}
                        type={
                            state() === State.Password
                                ? "password"
                                : state() === State.Email
                                  ? "email"
                                  : "text"
                        }
                        disabled={Placeholders[state()] === ""}
                        aria-disabled={Placeholders[state()] === ""}
                        onChange={(ev) => setValue(ev.target.value)}
                        class={`bg-layer text-white text-sm py-1.5 px-3 mb-2 w-64 rounded-lg outline-none placeholder:text-muted shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] focus:outline-none focus:ring-0 focus:border-transparent transition-shadow duration-200${Placeholders[state()] === "" ? " cursor-not-allowed shadow-[inset_0_-2px_0_0_transparent]" : ""}`}
                    />
                    <div class="text-muted text-sm mb-2">
                        Don't have an account?{" "}
                        <A
                            href="/auth/signup"
                            class="text-brandDark cursor-pointer underline"
                        >
                            Sign up today!
                        </A>
                    </div>
                    <Button
                        type="submit"
                        class={
                            Placeholders[state()] === ""
                                ? "cursor-not-allowed"
                                : void 0
                        }
                        disabled={Placeholders[state()] === ""}
                        aria-disabled={Placeholders[state()] === ""}
                    >
                        {Placeholders[state()] === "" ? "Loading" : "Next"}
                    </Button>
                </form>
            </div>
        </>
    );
}
