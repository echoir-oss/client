import { JSX } from "solid-js";

export default function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement> & { slim?: boolean }) {
    return <button {...props} class={`text-white ${props.slim ? "px-10 py-1" : "px-5 py-2"} transition-colors duration-300 bg-buttonNotRecommended hover:bg-brandDark rounded-md${props.class ? " " + props.class : ""}`}>
        {props.children}
    </button>
}