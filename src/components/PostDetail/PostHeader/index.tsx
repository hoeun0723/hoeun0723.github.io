import styled from '@emotion/styled'
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'

import PostHeaderInfo, {PostHeadInfoProps} from './PostHeader.info'

interface PostHeaderProps extends PostHeadInfoProps {
    thumbnail: IGatsbyImageData
}

interface GatsbyImgProps {
    image: IGatsbyImageData
    alt: string
    className?: string
}

const PostHeader = ({title,date,categories, thumbnail}:PostHeaderProps) => {
    return(
        <PostHeaderWrapper>
            <BackgroundImage image={thumbnail} alt="thumbnail"/>
            <PostHeaderInfo title={title} date={date} categories={categories}/>
        </PostHeaderWrapper>
    )
}

export default PostHeader


const PostHeaderWrapper = styled.div`
    position: relative;
    width:100%;
    height: 400px;

    @media (max-width: 768px) {
        height: 300px;
    }
`
// gatsby-plugin-image 라이브러리에서 제공해주는 GatsbyImage 컴포넌트에는 기본적으로 적용되어있는 인라인 스타일이 존재하는데,
// 인라인 스타일은 !important 속성이 없으면 스타일 적용 순위에서 밀리기 때문에 아래와 같이 styled(GatsbyImage) 과 같이 넘기지 않고 함수 내부에서 props를 받아 스타일과 함께 GatsbyImage 컴포넌트에 넘겨주도록 구현
// 하지만 !important 속성은 가능한 사용하지 말아야 하는 속성이기 때문에 위의 코드와 같이 직접 인라인으로 포지션 스타일을 넘겨주었습니다.

const BackgroundImage = styled((props: GatsbyImgProps)=><GatsbyImage {...props} style={{position: 'absolute'}}/>)`
    z-index: -1;
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: brightness()(0.25);

    @media (max-width: 768px) {
        height: 300px;
    }
`