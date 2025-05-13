import PostItem, { PostItemProps } from './PostItem'
import { Meta, StoryObj } from '@storybook/react' // Storybook 8.x에서 최신 패키지

import {post} from '@/mocks/posts.mock'

const meta: Meta<typeof PostItem> = {
  title: 'CATEGORY/PostItem',
  component: PostItem,
  args: {},
}
export default meta

type Story = StoryObj<PostItemProps>

export const Default: Story = {
  args: {
    ...post,
  },
}

export const WithLongTitle: Story = {
    args: {
    ...post,
    title:
    '테스트용 엄청 긴 제목입니다. 테스트용 엄청 긴 제목입니다. 테스트용 엄청 긴 제목입니다. 테스트용 엄청 긴 제목입니다.',
    }
}

export const WithLongSummary: Story = {
    args : {
    ...post,
    summary:
        '홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.',
    }
}
