import { UniformColumnGrid } from '../../layout/UniformColumnGrid'
import { SelectOption } from './SelectOption'

interface Props<T> {
  options: readonly T[]
  getName: (option: T) => string
  selectedOption: T
  onSelect: (option: T) => void
  groupName: string
}

export function ViewSelector<T>({
  options,
  getName,
  selectedOption,
  groupName,
  onSelect,
}: Props<T>) {
  return (
    <UniformColumnGrid gap={8}>
      {options.map((option) => (
        <SelectOption
          groupName={groupName}
          isSelected={option === selectedOption}
          value={getName(option)}
          onSelect={() => onSelect(option)}
          key={getName(option)}
        >
          {getName(option)}
        </SelectOption>
      ))}
    </UniformColumnGrid>
  )
}
