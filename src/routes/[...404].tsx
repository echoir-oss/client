import Page from "~/components/Page";
import LinkButton from "~/components/ui/LinkButton";

export default function NotFound() {
    return <Page title="UI Error" noBg unauthed>
        <div class="w-full h-full flex flex-col items-center justify-center">
            <div class="flex flex-row items-center gap-1">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 41C33.6127 41 41 33.6127 41 24.5C41 15.3873 33.6127 8 24.5 8C15.3873 8 8 15.3873 8 24.5C8 33.6127 15.3873 41 24.5 41ZM22.4717 27.7048V29.3223H24.869V27.8781C24.869 27.4545 24.9171 27.1561 25.0134 26.9828C25.1289 26.8095 25.3696 26.6362 25.7355 26.4629L27.0641 25.8274C28.258 25.269 29.2207 24.5181 29.9524 23.5745C30.7034 22.631 31.0789 21.4757 31.0789 20.1086C31.0789 18.8955 30.7997 17.846 30.2413 16.9603C29.7021 16.0745 28.9511 15.391 27.9884 14.9096C27.0256 14.4282 25.9184 14.1875 24.6668 14.1875C23.3959 14.1875 22.2791 14.4378 21.3164 14.9385C20.3728 15.4198 19.6315 16.0938 19.0923 16.9603C18.5724 17.8268 18.3125 18.8377 18.3125 19.993H20.7965C20.7965 18.8762 21.1431 18.0001 21.8363 17.3647C22.5294 16.71 23.473 16.3826 24.6668 16.3826C25.8414 16.3826 26.7849 16.7196 27.4974 17.3935C28.2098 18.0482 28.566 18.9532 28.566 20.1086C28.566 20.8018 28.4313 21.4083 28.1617 21.9282C27.8921 22.4288 27.507 22.8525 27.0063 23.1991C26.5057 23.5457 25.9377 23.8634 25.3022 24.1522L24.2624 24.6143C23.7233 24.8454 23.3189 25.0861 23.0493 25.3364C22.799 25.5867 22.6354 25.8948 22.5583 26.2607C22.5006 26.6265 22.4717 27.1079 22.4717 27.7048ZM21.9518 31.3152V34.7523H25.4755V31.3152H21.9518Z" fill="white"/>
                </svg>
                <h1 class="font-bold text-4xl">Link not found</h1>
            </div>
            <h3 class="text-center flex flex-col items-center gap-1 mt-1">
                <span class="text-muted mb-2">Looks like we couldn't find that URL.</span>
                <LinkButton href="/">Go back</LinkButton>
            </h3>
        </div>
    </Page>
}
