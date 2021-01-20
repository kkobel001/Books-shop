import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

export default {
  title: 'Example/SocialMediaIcons',
  component: SocialMediaIcons,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'My Card',
  },
};

const Template = args => <SocialMediaIcons {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: 'SocialMediaIcon',
};
