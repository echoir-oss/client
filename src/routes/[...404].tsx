import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function NotFound() {
    return <Page title="404 Not Found" noBg>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-4xl">Not found</h1>
            <h3>
                <span class="text-muted">Looks like we couldn't find that URL. </span>
                <A href="/" class="underline text-brand">Go home</A>
            </h3>
        </div>
    </Page>
}
