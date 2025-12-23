import Page from "~/components/Page";
import Button from "~/components/ui/Button";

export default function Error() {
    return (
        <Page title="UI Error" noBg unauthed>
            <div class="flex flex-col justify-center items-center w-full h-full">
                <div class="flex items-center gap-1 flew-row">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.5 41C33.6127 41 41 33.6127 41 24.5C41 15.3873 33.6127 8 24.5 8C15.3873 8 8 15.3873 8 24.5C8 33.6127 15.3873 41 24.5 41ZM15.7078 31.9499L22.8435 24.748L15.4109 17.2465L17.1868 15.4869L24.6031 22.972L32.0935 15.4122L33.8694 17.1718L26.3628 24.748L33.5725 32.0246L31.7966 33.7842L24.6031 26.524L17.4837 33.7095L15.7078 31.9499Z"
                            fill="white"
                        />
                    </svg>
                    <h1 class="font-bold text-4xl">UI Error</h1>
                </div>
                <h3 class="flex flex-col items-center gap-1 mt-1">
                    <span class="mb-2 text-muted">
                        A component has crashed in Echoir and we need to reload.
                    </span>
                    <Button onClick={() => (location.href = "/")}>
                        Reload
                    </Button>
                </h3>
            </div>
        </Page>
    );
}
