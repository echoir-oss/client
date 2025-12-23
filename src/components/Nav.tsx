import { A, useLocation } from "@solidjs/router";
import type { JSX } from "solid-js";
import * as tauri from "~/api/tauri";
import Popover from "./Popover";
import { setOpen } from "./Settings";
import { open } from "./settings_ctx";

const app = tauri.window.getCurrentWindow();

export default function Nav(props: { blank?: boolean }): JSX.Element {
    return (
        <div
            data-tauri-drag-region
            class="top-0 z-[999] fixed inset-x-0 flex justify-between items-center bg-bg px-6 h-14 select-none navbar"
        >
            {!open() ? (
                <A
                    href={props.blank ? useLocation().pathname : "/"}
                    class="echoir-icon"
                >
                    <svg
                        width="78"
                        height="21"
                        viewBox="0 0 78 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.1783 19.6855L6.27313 19.6939C6.25048 19.6928 6.204 19.713 6.18135 19.7118L1.75304 19.7069L1.70775 19.7045C1.43596 19.6903 1.22254 19.4292 1.21413 19.1563L1.21137 1.44135L1.21374 1.39605C1.22799 1.12426 1.49018 0.888177 1.76196 0.902421L5.89584 0.891962L5.98643 0.89671L12.0275 0.895362L12.0728 0.897736C12.3446 0.911979 12.5807 1.17418 12.5891 1.44715L12.5637 5.39758L12.5614 5.44288C12.5471 5.71467 12.2849 5.95075 12.012 5.95916L6.72064 5.95438L6.73181 7.90813L10.7859 8.1206C11.0577 8.13485 11.3176 8.37558 11.3021 8.67002L11.2998 8.71531L11.0729 12.1782C11.0336 12.4941 10.7941 12.7314 10.477 12.7148L6.71734 12.5178L6.7202 14.6301L12.2392 14.6241L12.2845 14.6264C12.5789 14.6419 12.815 14.9041 12.8007 15.1758L12.7528 19.1251C12.7373 19.4195 12.4966 19.6794 12.1783 19.6855Z"
                            fill="white"
                        />
                        <path
                            d="M26.144 8.03766L25.0781 10.782C24.9874 11.0541 24.7379 11.2809 24.4658 11.2809C24.375 11.2809 24.2617 11.2356 24.1709 11.1675C23.7627 10.8273 22.9689 10.5778 22.1751 10.5778C21.5855 10.5778 19.6124 10.7139 19.6124 13.186C19.6124 14.7056 20.701 15.7035 22.1751 15.7035C23.1504 15.7035 24.2843 15.2726 25.3729 14.2747C25.509 14.1386 25.7131 14.0252 25.9173 14.0252C26.076 14.0252 26.2574 14.1159 26.4162 14.3881C26.8244 15.1592 27.0966 15.5675 27.4595 16.3159C27.5275 16.452 27.5729 16.6107 27.5729 16.7695C27.5729 17.0417 27.4595 17.2912 27.1873 17.5633C25.3503 19.3097 23.173 20.0808 21.1319 20.0808C17.3671 20.0808 14.0332 17.4499 14.0332 13.4582C14.0332 8.37786 18.0928 6.31396 21.8349 6.31396C24.3524 6.31396 26.1667 7.31189 26.1667 7.87889C26.1667 7.92425 26.1667 7.99229 26.144 8.03766Z"
                            fill="white"
                        />
                        <path
                            d="M44.2539 18.0624L42.0993 19.8315C41.8499 20.0356 41.6231 20.1036 41.4189 20.1036C41.3282 20.1036 37.1325 19.3325 37.1325 14.7284C37.1325 11.9841 35.8625 11.0089 34.2295 11.0089H34.1161V19.2418C34.1161 19.5139 33.912 19.718 33.6626 19.718H29.1267C28.8545 19.718 28.6504 19.5139 28.6504 19.2418V0.689417C28.6504 0.439936 28.8545 0.213135 29.1267 0.213135H33.6626C33.912 0.213135 34.1161 0.439936 34.1161 0.689417V6.58625C34.3883 6.56357 34.6605 6.56357 34.9099 6.56357C39.1737 6.56357 42.5756 9.10375 42.6436 13.5944C42.6663 15.0686 42.9611 16.2026 44.0724 17.0872C44.2085 17.2006 44.458 17.4274 44.458 17.6768C44.458 17.7902 44.4126 17.9263 44.2539 18.0624Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M51.1802 20.1035C54.4006 20.1035 58.8912 17.6314 58.8912 13.2088C58.8912 10.2603 56.7366 6.33667 51.7245 6.33667C47.7329 6.33667 44.2402 8.76345 44.2402 13.4356C44.2402 17.4273 47.4834 20.1035 51.1802 20.1035ZM51.7249 15.7717C53.3352 15.7717 54.0609 14.4563 54.0609 13.1635C54.0609 12.7326 53.9702 10.5326 51.6569 10.5326C49.7518 10.5326 49.2075 12.1429 49.2075 13.1635C49.2075 14.7284 50.4322 15.7717 51.7249 15.7717Z"
                            fill="white"
                        />
                        <path
                            d="M65.5444 19.7318L61.0028 19.7209L60.9575 19.7185C60.7084 19.7055 60.5379 19.4921 60.5283 19.2418L60.5401 8.18204C60.5544 7.91026 60.7463 7.71591 61.0192 7.70751L65.5608 7.71841L65.6061 7.72079C65.8326 7.73266 66.0257 7.94718 66.0138 8.17367L66.0008 19.2561L65.9984 19.3014C65.9866 19.5279 65.7721 19.721 65.5444 19.7318ZM65.5444 19.7318L61.0028 19.7209L60.9575 19.7185C60.7084 19.7055 60.5379 19.4921 60.5283 19.2418L60.5401 8.18204"
                            fill="white"
                        />
                        <path
                            d="M63.1688 6.12121C64.7256 6.12121 65.9941 4.85265 65.9941 3.2958C65.9941 1.71972 64.7256 0.451172 63.1688 0.451172C61.5927 0.451172 60.3242 1.71972 60.3242 3.2958C60.3242 4.85265 61.5927 6.12121 63.1688 6.12121Z"
                            fill="white"
                        />
                        <path
                            d="M73.2421 19.8154L68.7238 19.7298C68.4523 19.7108 68.2378 19.5282 68.2553 19.2781L68.3798 8.39368C68.3973 8.14352 68.6155 7.9493 68.8643 7.9667L71.4975 8.02514C72.744 7.75619 73.9321 7.67168 75.0633 7.75079C75.8325 7.80458 76.5733 7.94017 77.2645 8.13514C77.598 8.24226 77.7221 8.41852 77.7046 8.66868C77.6987 8.75206 77.6703 8.83387 77.6404 8.93652L76.7787 11.83C76.6905 12.1171 76.454 12.2472 76.1825 12.2282C76.1146 12.2235 76.0256 12.1963 75.9366 12.1691C75.5819 12.0396 75.2016 11.9501 74.817 11.9232C74.5003 11.9011 74.1806 11.9206 73.8128 11.9787L73.7267 19.3884L73.7237 19.4301C73.7077 19.6594 73.491 19.8328 73.2421 19.8154Z"
                            fill="white"
                        />
                    </svg>
                </A>
            ) : (
                <A href="#" class="w-[78px] cursor-default back-button">
                    <svg
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="h-6 cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <path
                            stroke-width={3}
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        ></path>
                    </svg>
                </A>
            )}
            {!props.blank && (
                <div class="flex items-center gap-2 nav-center">
                    <Popover
                        noPadding
                        contents={({ close }) => (
                            <div class="flex flex-col gap-3 w-64 user-popover">
                                <div class="user-popover-top relative">
                                    <img
                                        class="top-0 left-0 absolute w-64"
                                        src="/banner.png"
                                    />
                                    <svg
                                        viewBox="0 0 34 35"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="top-2 right-2 absolute bg-white/15 p-2 rounded-lg w-8 cursor-pointer"
                                        onClick={() => (close(), setOpen(true))}
                                    >
                                        <path
                                            d="M13.244,0.339c1.114,-0.223 2.265,-0.339 3.441,-0.339c1.184,0 2.343,0.118 3.464,0.343c0.746,0.15 1.327,0.735 1.472,1.482l0.899,4.642c0.072,0.373 0.458,0.596 0.817,0.472l4.461,-1.54c0.719,-0.248 1.516,-0.037 2.019,0.533c1.521,1.725 2.708,3.754 3.459,5.987c0.242,0.72 0.026,1.515 -0.548,2.013l-3.566,3.095c-0.287,0.25 -0.287,0.695 -0,0.944l3.566,3.096c0.574,0.498 0.79,1.293 0.548,2.013c-0.75,2.232 -1.938,4.262 -3.458,5.987c-0.503,0.57 -1.3,0.781 -2.019,0.533l-4.462,-1.54c-0.359,-0.124 -0.745,0.098 -0.817,0.472l-0.9,4.643c-0.144,0.747 -0.725,1.332 -1.471,1.482c-1.121,0.225 -2.28,0.343 -3.464,0.343c-1.176,-0 -2.327,-0.116 -3.441,-0.339c-0.747,-0.149 -1.329,-0.734 -1.474,-1.482l-0.9,-4.647c-0.072,-0.374 -0.458,-0.596 -0.817,-0.472l-4.478,1.545c-0.718,0.248 -1.515,0.038 -2.018,-0.532c-1.52,-1.723 -2.707,-3.749 -3.459,-5.978c-0.243,-0.72 -0.026,-1.516 0.548,-2.015l3.582,-3.109c0.287,-0.249 0.287,-0.694 -0,-0.944l-3.582,-3.108c-0.574,-0.499 -0.79,-1.295 -0.547,-2.016c0.752,-2.228 1.939,-4.254 3.459,-5.977c0.503,-0.57 1.3,-0.78 2.018,-0.532l4.477,1.545c0.359,0.124 0.745,-0.099 0.817,-0.472l0.9,-4.646c0.145,-0.748 0.727,-1.333 1.474,-1.482Zm3.443,11.536c-3.104,-0 -5.625,2.52 -5.625,5.625c0,3.104 2.521,5.625 5.625,5.625c3.105,-0 5.625,-2.521 5.625,-5.625c0,-3.105 -2.52,-5.625 -5.625,-5.625Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <div class="h-10" />
                                    <div class="px-4 pb-4">
                                        <div class="relative user-popover-pfp">
                                            <img
                                                src="https://cdn.discordapp.com/avatars/1250950455798927450/f57a2e80bc5e358e31e364426dd2b31b.webp?size=80"
                                                class="border-4 border-bg rounded-3xl size-16"
                                            />
                                            <svg
                                                viewBox="0 0 95 95"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="top-0 left-0 absolute size-16"
                                            >
                                                <circle
                                                    cx="73.573"
                                                    cy="73.573"
                                                    r="21.364"
                                                    fill="#f84040"
                                                    stroke="#010b09"
                                                    stroke-width={10}
                                                />
                                                <path
                                                    d="M65.561,73.573l16.023,-0"
                                                    stroke="white"
                                                    stroke-width={5.02}
                                                />
                                            </svg>
                                        </div>
                                        <div class="flex flex-col user-popover-details">
                                            <div class="flex items-center gap-1 user-popover-username">
                                                <span>patrick</span>
                                                <span class="-mt-0.5 text-muted text-sm">
                                                    @patricktbp
                                                </span>
                                            </div>
                                            <div class="mt-1.5 mb-0.5 border-muted/50 border-t w-full h-px"></div>
                                            <span class="text-muted text-sm cursor-pointer">
                                                set a status...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <div class="relative cursor-pointer nav-pfp">
                            <img
                                src="https://cdn.discordapp.com/avatars/1250950455798927450/f57a2e80bc5e358e31e364426dd2b31b.webp?size=80"
                                class="rounded-xl size-9"
                            />
                            <svg
                                viewBox="0 0 95 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="top-0.5 left-0.5 absolute size-9"
                            >
                                <circle
                                    cx="73.573"
                                    cy="73.573"
                                    r="21.364"
                                    fill="#f84040"
                                    stroke="#010b09"
                                    stroke-width={12.66}
                                />
                                <path
                                    d="M65.561,73.573l16.023,-0"
                                    stroke="white"
                                    stroke-width={5.02}
                                />
                            </svg>
                        </div>
                    </Popover>
                    <div class="relative search-bar">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="top-1/2 left-3 absolute size-5 -translate-y-1/2 pointer-events-none"
                        >
                            <path
                                d="M24.1836 24.1777L29.4791 29.4733"
                                stroke="white"
                                stroke-opacity={0.98}
                                stroke-width={2.3}
                            />
                            <circle
                                cx={17.1223}
                                cy={17.1174}
                                r={9.44106}
                                stroke="white"
                                stroke-opacity={0.98}
                                stroke-width={2.3}
                            />
                        </svg>
                        <input
                            placeholder="Search across the entire platform"
                            class="bg-layer shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] px-3 py-[9px] pl-10 focus:border-transparent rounded-xl outline-none focus:outline-none focus:ring-0 w-[400px] text-white placeholder:text-muted text-sm transition-shadow duration-200 search-bar-titlebar"
                        />
                    </div>
                    <div class="flex gap-1 nav-buttons">
                        <div class="flex justify-center items-center bg-layer rounded-r-md rounded-l-xl size-9 cursor-pointer nav-button">
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ml-0.5 size-4"
                            >
                                <path
                                    opacity="0.9"
                                    d="M8.00198 0.612134C8.07682 0.381806 8.40267 0.381806 8.47751 0.612134L10.2107 5.94638C10.2442 6.04938 10.3402 6.11912 10.4485 6.11912H16.0572C16.2994 6.11912 16.4001 6.42903 16.2042 6.57138L11.6666 9.86812C11.579 9.93178 11.5423 10.0446 11.5758 10.1476L13.309 15.4819C13.3838 15.7122 13.1202 15.9037 12.9243 15.7614L8.38669 12.4646C8.29907 12.401 8.18042 12.401 8.0928 12.4646L3.55522 15.7614C3.35929 15.9037 3.09567 15.7122 3.17051 15.4819L4.90371 10.1476C4.93718 10.0446 4.90052 9.93178 4.81289 9.86812L0.275313 6.57138C0.0793849 6.42903 0.180079 6.11912 0.42226 6.11912H6.03102C6.13932 6.11912 6.23531 6.04938 6.26878 5.94638L8.00198 0.612134Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div class="flex justify-center items-center bg-layer rounded-r-xl rounded-l-md size-9 cursor-pointer nav-button">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 13.8296V8.19059V3.17036C16 1.9717 15.0283 1 13.8296 1H3.17036C1.9717 1 1 1.97171 1 3.17036V8.19059V13.8296C1 15.0283 1.9717 16 3.17036 16H13.8296C15.0283 16 16 15.0283 16 13.8296ZM12.624 8.19059C13.3732 8.19059 13.9805 7.58327 13.9805 6.83411V4.04427C13.9805 3.29511 13.3732 2.6878 12.624 2.6878H4.45056C3.7014 2.6878 3.09408 3.29511 3.09408 4.04427V6.83411C3.09408 7.58327 3.7014 8.19059 4.45056 8.19059H6.34216C6.41057 9.24481 7.34976 10.0801 8.49832 10.0801C9.64688 10.0801 10.5861 9.24481 10.6545 8.19059H12.624Z"
                                    fill="white"
                                    opacity="0.85"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            <div class="flex gap-4 window-controls">
                <div
                    class="inline-flex justify-center items-center opacity-80 hover:opacity-100 size-5 hover:scale-110 transition-[opacity,transform] duration-300 cursor-pointer select-none window-control"
                    onClick={() => app.minimize()}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Minimize"
                    >
                        <path
                            d="M3.79688 10H16.1992"
                            stroke="white"
                            stroke-opacity="0.45"
                            stroke-width="1.875"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div
                    class="inline-flex justify-center items-center opacity-80 hover:opacity-100 size-5 hover:scale-110 transition-[opacity,transform] duration-300 cursor-pointer select-none window-control"
                    onClick={() => app.toggleMaximize()}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Maximize"
                    >
                        <rect
                            x="3.06445"
                            y="3.06348"
                            width="13.8733"
                            height="13.8733"
                            rx="1.5625"
                            stroke="white"
                            stroke-opacity="0.45"
                            stroke-width="1.875"
                        />
                    </svg>
                </div>
                <div
                    class="inline-flex justify-center items-center opacity-80 hover:opacity-100 size-5 hover:scale-110 transition-[opacity,transform] duration-300 cursor-pointer select-none window-control"
                    onClick={() => app.close()}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Close"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.7638 10.2059L2.74414 16.2814L4.07607 17.6011L10.0836 11.5379L16.1528 17.6635L17.4848 16.3438L11.4033 10.2059L17.7309 3.81969L16.3989 2.5L10.0836 8.87394L3.82998 2.56238L2.49805 3.88207L8.7638 10.2059Z"
                            fill="white"
                            fill-opacity="0.45"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
