"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface IconPickerProps {
    onchange: (icon: string) => void;
    children: React.ReactNode;
    asChild: boolean;
};

export const IconPicker = ({
    onchange,
    children,
    asChild
}: IconPickerProps) => {
    const { resolvedTheme } = useTheme();
    const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap

    const themeMap = {
        light: Theme.LIGHT,
        dark: Theme.DARK
    };

    const theme = themeMap[currentTheme];

    return (
        <Popover>
            <PopoverTrigger asChild={asChild}>
                {children}
            </PopoverTrigger>
            <PopoverContent className="p-0 w-full border-none shadow-none">
                <EmojiPicker
                    height={350}
                    theme={theme}
                    onEmojiClick={(data) => onchange(data.emoji)}
                />
            </PopoverContent>
        </Popover>
    );
};