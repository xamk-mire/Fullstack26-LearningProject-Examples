import { Link } from 'react-router-dom';
import type { ExerciseListItemDto } from '../types';
import { CategoryBadge } from './CategoryBadge';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

interface ExerciseCardProps {
  exercise: ExerciseListItemDto;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const notesTruncated =
    exercise.notes.length > 80
      ? `${exercise.notes.slice(0, 80)}…`
      : exercise.notes;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/exercises/${exercise.id}`} className="link link-hover">
            {exercise.name}
          </Link>
        </h2>
        <p className="text-sm text-base-content/70">
          {formatDate(exercise.date)}
        </p>
        {exercise.notes && (
          <p className="text-sm line-clamp-2">{notesTruncated}</p>
        )}
        <div className="flex flex-wrap gap-1 mt-2">
          {exercise.categories.map((cat) => (
            <CategoryBadge key={cat.id} category={cat} />
          ))}
        </div>
        <div className="card-actions justify-end mt-2">
          <Link
            to={`/exercises/${exercise.id}`}
            className="btn btn-sm btn-primary"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
