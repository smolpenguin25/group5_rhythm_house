import { IconsQuotes } from ".";

export default {
  title: "Components/IconsQuotes",
  component: IconsQuotes,
  argTypes: {
    type: {
      options: ["double", "single"],
      control: { type: "select" },
    },
    direction: {
      options: ["right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "double",
    direction: "right",
  },
};
