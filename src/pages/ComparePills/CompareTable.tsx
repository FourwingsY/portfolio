import * as S from "./ComparePills.style"
import { PointSet } from "./models"

interface Props {
  dataset: PointSet[]
  onSelect: (id1: string, id2: string) => void
}
export default function CompareTable({ dataset, onSelect }: Props) {
  return (
    <S.CompareTable>
      <tr>
        <th></th>
        {dataset.map((_, i) => (
          <th key={i}>image {i + 1}</th>
        ))}
      </tr>
      {dataset.map((set1, i) => (
        <tr key={i}>
          <th>image {i + 1}</th>
          {dataset.map((set2, j) =>
            i < j ? (
              <td key={j} onClick={() => onSelect(set1.id, set2.id)}>
                비교하기
              </td>
            ) : (
              <td />
            )
          )}
        </tr>
      ))}
    </S.CompareTable>
  )
}
