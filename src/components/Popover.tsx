import { createEffect, createSignal, JSX, ParentProps } from "solid-js";

export default function Popover(props: ParentProps<{ contents: () => JSX.Element }>): JSX.Element {
    const [open, setOpen] = createSignal(false);
    let ref: HTMLDivElement = void 0 as any;
    const [rect, setRect] = createSignal(null as unknown as DOMRect);

    // queueMicrotask will run **after the DOM has been rendered** at least in sync components.
    queueMicrotask(() => setRect(ref.getBoundingClientRect()));

    return <div class="popover-wrapper">
        <div onClick={() => setRect(ref.getBoundingClientRect()) && setOpen(!open())} ref={ref}>{props.children}</div>
        <div style={`left:${(rect()?.x ?? 0) + (rect()?.width ?? 0) / 2}px;top:${(rect()?.bottom ?? 0) + 4}px`} class={`popover shadow-black/0.4 shadow-lg fixed -translate-x-1/2 transition-all border-muted p-4 rounded-lg bg-bg ${open() ? "opacity-100 scale-100" : "scale-90 opacity-0 pointer-events-none"}`}>
            <props.contents />
        </div>
        {open() && <div class="fixed top-0 left-0 w-screen h-screen" onClick={() => setOpen(false)} /> }
    </div>
}