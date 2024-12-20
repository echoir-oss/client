import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <h1>home page - testing for now, heres some routes (somewhat mirrored in Settings {">"} Developer {">"} Routes)</h1>
        <div class="flex flex-col gap-1">
            <A href="/notfound">Not Found Page</A>
            <A href="/error">UI Error Page</A>
            <A href="/chat-proto">Chat Prototype Page</A>
            <A href="/auth/signin">Auth {">"} Sign In</A>
        </div>
    </Page>
}
