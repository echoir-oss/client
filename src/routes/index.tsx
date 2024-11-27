import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <h1>home page - testing for now</h1>
        <A href="/notfound">Not Found Page</A>
        <br />
        <A href="/error">UI Error Page</A>
    </Page>
}
