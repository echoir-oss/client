import createTween from "@solid-primitives/tween";
import { Title } from "@solidjs/meta";
import Cropper from "cropperjs";
import {
    createEffect,
    createMemo,
    createSignal,
    on,
    onCleanup,
    onMount,
} from "solid-js";
import { isServer, Portal } from "solid-js/web";
import Nav from "~/components/Nav";
import * as starfield from "~/components/starfield";
import Button from "~/components/ui/Button";

// old self-impl version
// const CHUNK_SIZE = 128;

// class Stars {
//     private stars: [x: number, y: number, ox: number, oy: number, tx: number, ty: number, p: number][] = [];
//     private inAnim = false;
//     private animFrame = 0;

//     private canvas: HTMLCanvasElement;
//     private width: number;
//     private height: number;

//     public constructor(canvas: HTMLCanvasElement) {
//         this.width = canvas.getBoundingClientRect().width;
//         this.height = canvas.getBoundingClientRect().height;
//         canvas.width = this.width;
//         canvas.height = this.height;
//         this.canvas = canvas;
//     }

//     public spawn() {
//         for (let i = 0; i < 6; i++) {
//             for (let j = 0; j < 10; j++) {
//                 const x = Math.random() * CHUNK_SIZE + (this.width / 2 + ((i - 3) * CHUNK_SIZE));
//                 const y = Math.random() * CHUNK_SIZE + (this.height / 2) - CHUNK_SIZE;
//                 this.stars.push([x, y, x, y, x, y, 1]);
//             }
//         }
//         for (let i = 0; i < 6; i++) {
//             for (let j = 0; j < 10; j++) {
//                 const x = Math.random() * CHUNK_SIZE + (this.width / 2 + ((i - 3) * CHUNK_SIZE));
//                 const y = Math.random() * CHUNK_SIZE + this.height / 2;
//                 this.stars.push([x, y, x, y, x, y, 1]);
//             }
//         }
//     }

//     private lastDelta: number = 0;

//     public draw(_deltaTime: number) {
//         const deltaTime = _deltaTime - this.lastDelta;
//         this.lastDelta = _deltaTime;
//         const r = this.canvas.getContext("2d")!;
//         r.fillStyle = "#000000";
//         r.fillRect(0, 0, this.width, this.height);
//         r.fillStyle = "white";
//         for (let i = 0; i < this.stars.length; i++) {
//             const star = this.stars[i];
//             if(star[6] === 1) { // p
//                 star[2] = star[0]; // ox
//                 star[3] = star[1]; // oy
//                 star[4] = star[0] + (Math.random() - 0.5) * 12; // tx
//                 star[5] = star[1] + (Math.random() - 0.5) * 12; // ty
//                 star[6] = 0; // p
//             }
//             star[0] = star[2] + ((star[4] - star[2]) * star[6]);
//             star[1] = star[3] + ((star[5] - star[3]) * star[6]);
//             star[6] += deltaTime / 4;
//             star[6] = Math.min(star[6], 1);
//             r.beginPath();
//             r.ellipse(Math.floor(star[0]), Math.floor(star[1]), 2, 2, 0, 0, 2 * Math.PI);
//             r.fill();
//         }
//     }
// }

export default function Welcome() {
    const [inAnim, setInAnim] = createSignal(false);
    const [value, setValue] = createSignal("");
    const [file, setFile] = createSignal(new Blob());
    const [step, setStep] = createSignal(2);
    // window.setStep = setStep;
    const steps = [
        () => (
            <>
                <h1 class="text-3xl font-bold">Welcome to Echoir!</h1>
                <span class="text-muted text-center">
                    Let's set up your profile so you can start connecting.
                </span>
                <form onSubmit={(ev) => (ev.preventDefault(), setInAnim(true))}>
                    <Button type="submit" class="mt-2">
                        Next
                    </Button>
                </form>
            </>
        ),
        () => (
            <>
                <h1 class="text-3xl font-bold">What's your username?</h1>
                <span class="text-muted text-center">
                    Choose something good... or don't, I won't judge. Promise.
                </span>
                <span class="text-sm text-muted/70">
                    Up to 16 letters, numbers, and dots
                </span>
                <form
                    onSubmit={(ev) => (ev.preventDefault(), setInAnim(true))}
                    class="flex flex-col items-center gap-4"
                >
                    <input
                        placeholder="Username"
                        value={value()}
                        type="text"
                        onChange={(ev) => setValue(ev.target.value)}
                        class="bg-layer text-white text-sm py-1.5 px-3 mt-2 w-64 rounded-lg outline-none placeholder:text-muted shadow-[inset_0_-2px_0_0_transparent] focus:shadow-[inset_0_-2px_0_0_#16A085] focus:outline-none focus:ring-0 focus:border-transparent transition-shadow duration-200"
                    />
                    <Button type="submit">Next</Button>
                </form>
            </>
        ),
        () => {
            const [open, setOpen] = createSignal(true);
            createEffect(() => {
                if (file().size > 0) {
                    setOpen(true);
                }
            });
            let img = null! as HTMLImageElement;
            const container = (<div />) as HTMLElement;
            onMount(() =>
                createEffect(
                    () =>
                        new Cropper(
                            ((img = (
                                <img
                                    src={URL.createObjectURL(file())}
                                    class="block max-w-full"
                                />
                            ) as HTMLImageElement),
                            container.replaceChildren(img),
                            img),
                            {
                                aspectRatio: 1,
                                crop(event) {},
                                autoCrop: true,
                            },
                        ),
                ),
            );
            return (
                <>
                    <h1 class="text-3xl font-bold">
                        Upload your profile picture.
                    </h1>
                    <span class="text-muted text-center">
                        Or I can just slap on a default avatar and call it a
                        day. Your choice.
                    </span>
                    <span class="text-sm text-muted/70">
                        64x64 to 1024x1024
                    </span>
                    <form
                        onSubmit={(ev) => (
                            ev.preventDefault(), setInAnim(true)
                        )}
                        class="flex flex-col items-center gap-4"
                    >
                        <input
                            placeholder="Username"
                            type="file"
                            onChange={(ev) =>
                                setFile((ev.target.files ?? [])[0])
                            }
                            class="bg-layer text-white text-sm py-1.5 px-2 mt-2 w-64 rounded-lg outline-none placeholder:text-muted file:rounded-md file:mr-2 file:border-0 file:bg-brand hover:file:bg-brandDark file:text-white file:transition-colors file:!px-1.5 file:!py-1 focus:outline-none focus:ring-0 focus:border-transparent"
                        />
                        <Button type="submit">Next</Button>
                    </form>
                    {open() && (
                        <Portal mount={document.body}>
                            <div
                                class="fixed top-0 bg-black/60 pointer-events-auto w-screen h-screen z-10"
                                onClick={() => setOpen(false)}
                            />
                            <div class="fixed top-0 w-screen h-screen grid place-items-center pointer-events-none z-20">
                                <div class="bg-black rounded-lg px-8 py-6 flex flex-col z-20 pointer-events-auto">
                                    <div class="flex justify-between items-center w-full">
                                        <h1 class="text-2xl font-bold">
                                            Crop image
                                        </h1>
                                        <svg
                                            data-slot="icon"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            class="h-8 cursor-pointer"
                                            onClick={() => setOpen(false)}
                                        >
                                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>
                                    </div>
                                    {container}
                                </div>
                            </div>
                        </Portal>
                    )}
                </>
            );
        },
    ];
    onMount(() => {
        const field = new starfield.StarField("starfield-canvas", {
            trails: true,
            minV: 0.3,
            maxV: 0.3,
            numStars: 8000,
        });
        createEffect(() => {
            if (inAnim()) {
                setTimeout(() => {
                    const [val, setVal] = createSignal(0.3);
                    const tween = createTween(val, {
                        duration: 1250,
                        ease: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
                    });
                    const reduced = matchMedia(
                        `(prefers-reduced-motion: reduce)`,
                    ).matches;
                    setVal(reduced ? 5 : 50);
                    createEffect(() => {
                        field.setV(tween());
                    });
                    field.setFollowMouse(true);
                    setTimeout(() => {
                        const [val, setVal] = createSignal(reduced ? 5 : 50);
                        const tween = createTween(val, {
                            duration: 3000,
                            ease: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
                        });
                        setVal(0.3);
                        createEffect(() => {
                            field.setV(tween());
                            if (tween() === 0.3) {
                                field.setFollowMouse(false);
                                setStep((prev) => (prev + 1) % steps.length);
                                setTimeout(() => setInAnim(false), 200);
                            }
                        });
                    }, 3000);
                }, 500);
            }
        });
        onCleanup(() => (field.stop(), (field.stars = [])));
    });
    return (
        <>
            <Title>Welcome to Echoir / Echoir</Title>
            <Nav blank />
            <div class="fixed w-screen h-screen grid place-items-center pointer-events-none">
                <div
                    class={`bg-black/10 backdrop-blur-sm rounded-lg border border-muted px-8 py-6 flex flex-col items-center transition-opacity duration-300 ${inAnim() ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
                >
                    {steps[step()]()}
                </div>
            </div>
            <canvas
                class="w-screen h-screen"
                id="starfield-canvas"
                tabindex={-1}
            />
        </>
    );
}
