import React from 'react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Input',
  },
};

const Template = args => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: 'Button',
};
