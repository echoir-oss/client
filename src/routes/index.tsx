import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <h1>home page - testing for now</h1>
        <a href="/notfound">Not Found Page</a>
        <br></br>
        <a href="/error">UI Error Page</a>
    </Page>
}
