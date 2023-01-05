import { faX } from '@fortawesome/free-solid-svg-icons';

import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '~/components/icon-button';

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    render: (args) => <IconButton {...args} />,
    args: {
        name: 'default',
        icon: faX,
    },
};
