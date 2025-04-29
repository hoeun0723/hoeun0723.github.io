import CategoryList, {CategoryListProps} from './index'

export default {
    title: 'CATEGORY/CategoryList',
    component: CategoryList,
    args: {
        selectedCategory: 'All',
        categoryList: {All: 0},
    },
}

export const Default = {
    args:{},
} satisfies {args: Partial<CategoryListProps>}