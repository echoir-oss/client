import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <h1>cool ass page pt1</h1>
        <A href="/notfound">not found page</A>
    </Page>
}
