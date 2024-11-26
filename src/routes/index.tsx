import { A } from "@solidjs/router";
import Page from "~/components/Page";

export default function Home() {
    return <Page title="Home">
        <div class="server-bar h-full w-16">
            <A href="/" activeClass="groupactive" class="server-button home-button relative flex items-center justify-center h-16 w-16 bg-bgLayer rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14" fill="none" class="home-icon">
                    <path d="M7.98568 0.315064C7.40979 -0.105021 6.59021 -0.105021 6.01432 0.315064L0.589334 4.27243C0.216774 4.54418 0 4.95501 0 5.38926V12.5681C0 13.3589 0.705151 14 1.575 14H3.36618C4.23603 14 4.94118 13.3589 4.94118 12.5681V9.39474C4.94118 8.88606 5.40206 8.47368 5.97059 8.47368H8.02941C8.59793 8.47368 9.05882 8.88606 9.05882 9.39474V12.5681C9.05882 13.3589 9.76397 14 10.6338 14H12.425C13.2949 14 14 13.3589 14 12.5681V5.38926C14 4.95497 13.7832 4.54418 13.4107 4.27243L7.98568 0.315064Z" fill="white" />
                </svg>
                <div class="server-button-indicator hidden group-[active]:block absolute left-0 h-8 w-1 bg-brand rounded-r-full"></div>
            </A>
        </div>
        <div class="dm-container rounded-xl bg-bgLayer w-64 h-full"></div>
        <div class="primary-content rounded-xl bg-bgLayer w-full h-full"></div>
    </Page>
}
