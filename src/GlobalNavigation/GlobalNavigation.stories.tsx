import GlobalNavigation from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GlobalNavigation> = {
  title: 'CATEGORY/GlobalNavigation',
  component: GlobalNavigation,
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const Default: Story = {
  args: {},
}
