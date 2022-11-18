import React from "react";
import MyHipContent, { MyHipContainerProps } from "./myHipContent";
import { ComponentStory, ComponentMeta, Meta, Story } from "@storybook/react";

export default {
  title: "stories/test",
  component: MyHipContent,
  parameters: {
    content: [
      {
        shortsId: 1,
        thumbnailSrc:
          "https://cdn.discordapp.com/attachments/351251666626019328/1041545847789334588/awmsrcc2m4vh5ihw2ynm_20221114114410.jpg",
      },
    ],
    text: "안녕하세요!",
  },
} as Meta;

const Template: Story<MyHipContainerProps> = (args) => (
  <MyHipContent {...args} />
);

export const Primary = Template.bind({});

// Primary.args = {
//   content: [
//     {
//       shortsId: 1,
//       thumbnailSrc:
//         "https://cdn.discordapp.com/attachments/351251666626019328/1041545847789334588/awmsrcc2m4vh5ihw2ynm_20221114114410.jpg",
//     },
//   ],
//   text: "안녕하세요!",
// };
