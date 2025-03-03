import { createMemo, createSignal, For, JSX, ParentProps } from "solid-js";

export function TabBar(props: { children: JSX.Element }): JSX.Element {
    const [selected, setSelected] = createSignal(0);
    const children = createMemo(() => (props.children as never as (() => [JSX.Element, JSX.Element])[]).map(x => x()));
    return <div class="w-full h-full flex flex-col gap-2">
        <div class="flex">
            <For each={children()}>
                {([name], idx) => {
                    return <div class="px-4 py-2 transition-colors rounded-md relative w-fit hover:bg-layer cursor-pointer" onClick={() => setSelected(idx())}>
                        {name}
                        <div class={`absolute left-0 bottom-0 w-[calc(100%-32px)] h-1 mx-4 transition-opacity rounded-t bg-brand ${idx() === selected() ? "opacity-100" : "opacity-0"}`} />
                    </div>
                }}
            </For>
        </div>
        {children()[selected()][1]}
    </div>
}

export function Tab(props: ParentProps<{ name: JSX.Element }>): JSX.Element {
    return [props.name, props.children];
}