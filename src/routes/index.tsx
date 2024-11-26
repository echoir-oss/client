import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        yes
        <A href="/notfound">a</A>
    </Page>
}
