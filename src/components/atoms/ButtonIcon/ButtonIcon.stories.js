import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ButtonIcon from './ButtonIcon';

export const Primary = () => <ButtonIcon> icon={FavoriteBorderIcon} </ButtonIcon>;

export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'My Card',
  },
};

const Template = args => <ButtonIcon {...args} icon={FavoriteBorderIcon} />;

export const Simple = Template.bind({});
Simple.args = {
  primary: true,
  label: 'Button',
};
