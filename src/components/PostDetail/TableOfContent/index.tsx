import * as S from './TableOfContent.style'

export interface TableOfContentProps {
    tableOfContents: string
}

const TableOfContent = ({tableOfContents}: TableOfContentProps) => {
    return (
        <S.Container
            // 스타일링을 위해서 클래스이름을 부여한다.
            className='table-of-content'
            // dangerouslySetInnerHTML는 보안 관점에서 위험하지만
            // innerHTML 을 사용하겠다는 뜻이다.
            dangerouslySetInnerHTML={{__html: tableOfContents}}
            />
    )
}

export default TableOfContent