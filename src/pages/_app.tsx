import { AppProvider } from "@/components/cmd/context/AppContext";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

    return (
        <NextUIProvider>
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </NextUIProvider>
    );
}
