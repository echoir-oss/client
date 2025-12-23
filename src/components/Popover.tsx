import { createSignal, JSX, onCleanup, ParentProps } from "solid-js";
import { Portal } from "solid-js/web";

export default function Popover(
    props: ParentProps<{
        contents: (props: { close: () => void }) => JSX.Element;
        noPadding?: boolean;
    }>,
): JSX.Element {
    const [open, setOpen] = createSignal(false);
    let ref: HTMLDivElement = void 0 as any;
    const [rect, setRect] = createSignal(null as unknown as DOMRect);

    // queueMicrotask will run **after the DOM has been rendered** at least in sync components.
    queueMicrotask(() => setRect(ref.getBoundingClientRect()));
    const interval = setInterval(
        () => setRect(ref.getBoundingClientRect()),
        100,
    );
    onCleanup(() => clearInterval(interval));

    return (
        <div class="popover-wrapper">
            <div
                onClick={() =>
                    setRect(ref.getBoundingClientRect()) && setOpen(!open())
                }
                ref={ref}
            >
                {props.children}
            </div>
            <div
                style={`left:${(rect()?.x ?? 0) + (rect()?.width ?? 0) / 2}px;top:${(rect()?.bottom ?? 0) + 4}px`}
                class={`popover overflow-hidden z-[998] shadow-black/0.4 shadow-lg fixed -translate-x-1/2 transition-all border-muted ${props.noPadding ? "" : "p-4 "}rounded-lg bg-bg ${open() ? "opacity-100 scale-100" : "scale-90 opacity-0 pointer-events-none"}`}
            >
                <props.contents close={() => setOpen(false)} />
            </div>
            {open() && (
                <Portal mount={document.body}>
                    <div
                        class="top-0 left-0 z-[997] fixed w-screen h-screen"
                        onClick={() => setOpen(false)}
                    />
                </Portal>
            )}
        </div>
    );
}
