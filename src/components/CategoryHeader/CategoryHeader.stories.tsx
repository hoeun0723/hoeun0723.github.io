import MainHeader, { MainHeaderProps } from './index'
import { Meta, StoryObj } from '@storybook/react' // Storybook 8.x에서 최신 패키지

const meta: Meta<typeof MainHeader> = {
  title: 'CATEGORY/MainHeader',
  component: MainHeader,
  args: {
    selectedCategory: 'All',
    categoryList: { All: 7, BACK: 2, JS: 2, Optimization: 3 },
  },
}
export default meta

type Story = StoryObj<MainHeaderProps>

export const Default: Story = {
  args: {},
}
