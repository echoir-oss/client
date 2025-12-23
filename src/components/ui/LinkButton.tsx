import { A, type AnchorProps } from "@solidjs/router";

export default function LinkButton(props: AnchorProps & { slim?: boolean }) {
    return (
        <A
            {...props}
            class={`text-white ${props.slim ? "px-10 py-1" : "px-5 py-2"} transition-colors duration-300 bg-brand hover:bg-brandDark rounded-md${props.class ? " " + props.class : ""}`}
        >
            {props.children}
        </A>
    );
}
