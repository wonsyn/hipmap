import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";
import LoginWrapper from "./index";

export default {
  title: "stories/login",
  component: LoginWrapper,
} as ComponentMeta<typeof LoginWrapper>;

const Template: ComponentStory<typeof LoginWrapper> = () => <LoginWrapper />;

export const Login = Template.bind({});
