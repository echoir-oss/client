import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function NotFound() {
    return <Page title="UI Error" noBg>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-4xl">UI Error</h1>
            <h3>
                <span class="text-muted">A critical error occurred in Echoir. </span>
                <A href="#" class="text-brand" onClick={() => location.href = "/"}>Reload</A>
            </h3>
        </div>
    </Page>
}
