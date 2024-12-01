import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <div class="flex flex-col h-full">
            <div class="flex flex-col-reverse h-full">
                <div>message</div>
                <div>a</div>
                <div>is</div>
                <div>this</div>
                <div>(new would load "down" here (only down in the code; this is a reverse column))</div>
            </div>
            <div class="relative w-full">
                <input class="h-11 mt-4 w-full bg-layer text-white py-2 px-4 rounded-xl outline-none placeholder:text-muted shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] focus:outline-none focus:ring-0 focus:border-transparent transition-shadow duration-200" />
            </div>
        </div>
    </Page>
}
