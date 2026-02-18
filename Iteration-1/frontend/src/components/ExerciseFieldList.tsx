import type { ExerciseFieldDto } from '../types';

interface ExerciseFieldListProps {
  fields: ExerciseFieldDto[];
}

export function ExerciseFieldList({ fields }: ExerciseFieldListProps) {
  if (fields.length === 0) {
    return <p className="text-base-content/70">No details recorded.</p>;
  }

  return (
    <ul className="list-none space-y-2">
      {fields.map((f) => (
        <li key={f.id} className="flex gap-2 items-center">
          <span className="font-medium capitalize">{f.name}:</span>
          <span>
            {f.value} {f.unit}
          </span>
        </li>
      ))}
    </ul>
  );
}
