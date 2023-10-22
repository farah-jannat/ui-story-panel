

import { Pie } from "@src/pages";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "pages/Charts/Pie",
    component: Pie,
    tags: ["autodocs"],
} satisfies Meta<typeof Pie>;

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
