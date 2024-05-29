"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { IconPicker } from "./icon-picker";

interface ToolbarProps {
    initialData: Doc<"documents">;
    preview?: boolean;
};

export const Toolbar = ({
    initialData,
    preview
}: ToolbarProps) => {
    return (
        <div className="pl-[54px] group relative">
            {!!initialData.icon && !preview && (
                <div className="flex items-center gap-x-2 group/icon ">
                    <IconPicker onchange={() => {}}>
                        <p className="text-6xl hover:opacity-75 transition">
                            {initialData.icon}
                        </p>
                    </IconPicker>
                </div>
            )}
        </div>
    )
}