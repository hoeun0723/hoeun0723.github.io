import CategoryList, { CategoryListProps } from './CategoryList'
import { Meta, StoryObj } from '@storybook/react' // Storybook 8.x에서 최신 패키지

const meta: Meta<typeof CategoryList> = {
  title: 'CATEGORY/CategoryList',
  component: CategoryList,
  args: {
    selectedCategory: 'All',
    categoryList: { All: 7, BACK: 2, JS: 2, Optimization: 3 },
  },
}
export default meta

type Story = StoryObj<CategoryListProps>

export const Default: Story = {
  args: {},
}
