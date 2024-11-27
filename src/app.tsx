import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { SettingsProvider } from "./components/Settings";

export default function App() {
    return (
        <Router root={props => (
            <Suspense>
                <MetaProvider>
                    <SettingsProvider>
                        {props.children}
                    </SettingsProvider>
                </MetaProvider>
            </Suspense>
        )}>
            <FileRoutes />
        </Router>
    );
}
