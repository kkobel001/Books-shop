import React from 'react';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'My Card',
  },
};

const Template = args => <ButtonIcon {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: 'Button',
};
