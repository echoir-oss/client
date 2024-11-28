import { JSX } from "solid-js";

export default function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} class={`text-white px-5 py-2 transition-colors duration-300 bg-brand hover:bg-brandDark rounded-md${props.class ? " " + props.class : ""}`}>
        {props.children}
    </button>
}