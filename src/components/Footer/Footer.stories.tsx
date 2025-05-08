import Footer from './index'
import { Meta, StoryObj } from '@storybook/react' // Storybook 8.x에서 최신 패키지

const meta: Meta<typeof Footer> = {
  title: 'CATEGORY/Footer',
  component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
