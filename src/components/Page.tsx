import { JSX, ParentProps } from "solid-js";
import Nav from "./Nav";
import { Title } from "@solidjs/meta";

export default function Page(props: ParentProps<{ title: string }>): JSX.Element {
    return <>
        <Title>{props.title} / Echoir</Title>
        <Nav />
        <main class="pt-14 pl-4 pr-3 pb-3 h-screen flex gap-4">{props.children}</main>
    </>
}