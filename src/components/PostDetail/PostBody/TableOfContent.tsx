import * as S from '../PostDetail.style'

export interface TableOfContentProps {
  tableOfContents: string
}

const TableOfContent = ({ tableOfContents }: TableOfContentProps) => {
  return <S.TableOfContent className="table-of-content" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
}

export default TableOfContent
