import Page from "~/components/Page";

export default function Home() {
    return (
        <Page title="Home">
            <div class="flex flex-col h-full">
                <div class="flex flex-col-reverse h-full">
                    <div>message</div>
                    <div>a</div>
                    <div>is</div>
                    <div>this</div>
                    <div>
                        (new would load "down" here (only down in the code; this
                        is a reverse column))
                    </div>
                </div>
                <div class="relative w-full">
                    <input class="bg-layer shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] mt-4 px-4 py-2 focus:border-transparent rounded-xl outline-none focus:outline-none focus:ring-0 w-full h-11 text-white placeholder:text-muted transition-shadow duration-200" />
                </div>
            </div>
        </Page>
    );
}
