import { A, AnchorProps } from "@solidjs/router";

export default function LinkButton(props: AnchorProps) {
    return <A {...props} class={`text-white px-5 py-2 transition-colors duration-300 bg-brand hover:bg-brandDark rounded-md${props.class ? " " + props.class : ""}`}>
        {props.children}
    </A>
}