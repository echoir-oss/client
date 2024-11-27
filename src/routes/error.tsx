import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function NotFound() {
    return <Page title="UI Error" noBg>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-4xl">UI Error</h1>
            <h3 class="text-center flex flex-col items-center justify-center">
                <span class="text-muted mt-[4px]">A component has crashed in Echoir and we need to reload. </span><br></br>
                <A href="#" class="text-white px-[20px] py-[10px] mt-[-12px] bg-brand rounded-md" onClick={() => location.href = "/"}>Reload</A>
            </h3>
        </div>
    </Page>
}
