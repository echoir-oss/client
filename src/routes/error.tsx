import Page from "~/components/Page";
import Button from "~/components/ui/Button";

export default function Error() {
    return <Page title="UI Error" noBg>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-4xl">UI Error</h1>
            <h3 class="flex flex-col items-center gap-1 mt-1">
                <span class="text-muted">A component has crashed in Echoir and we need to reload.</span>
                <Button onClick={() => location.href = "/"}>Reload</Button>
            </h3>
        </div>
    </Page>
}
