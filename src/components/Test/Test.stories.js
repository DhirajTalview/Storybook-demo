import React from "react";
import Test from "./Test";

export default {
  title: "Component/Test",
  component: Test,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    padding: { control: "number", defaultValue: 5 },
    children: { control: "text", defaultValue: "Test" },
    onClick: { action: "clicked" },
  },
};

export const TestComp = (arg) => <Test {...arg} />;
