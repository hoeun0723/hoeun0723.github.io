import type { Meta, StoryObj } from '@storybook/react'

import GlobalNavigation from './index'

const meta: Meta<typeof GlobalNavigation> = {
  title: 'CATEGORY/GlobalNavigation',
  component: GlobalNavigation,
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const Default: Story = {
  args: {},
}
