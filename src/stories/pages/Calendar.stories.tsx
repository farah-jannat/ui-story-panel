

import { Calendar } from "@src/pages";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "pages/Calendar",
    component: Calendar,
    tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        primary: true,
        label: "Button",
    },
};
