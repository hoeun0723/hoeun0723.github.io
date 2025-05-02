import CategoryList, { CategoryListProps } from './index';
import { Meta, StoryObj } from '@storybook/react';  // Storybook 8.x에서 최신 패키지

const meta: Meta<typeof CategoryList> = {
  title: 'CATEGORY/CategoryList',
  component: CategoryList,
  args: {
    selectedCategory: 'All',
    categoryList: { All: 0 },
  },
};
export default meta;

type Story = StoryObj<CategoryListProps>;

export const Default: Story = {
  args: {},
};
