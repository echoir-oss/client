import Page from "~/components/Page";
import LinkButton from "~/components/ui/LinkButton";

export default function NotFound() {
    return <Page title="UI Error" noBg unauthed>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-4xl">Link not found</h1>
            <h3 class="text-center flex flex-col items-center gap-1 mt-1">
                <span class="text-muted">Looks like we couldn't find that URL.</span>
                <LinkButton href="/">Go back</LinkButton>
            </h3>
        </div>
    </Page>
}
