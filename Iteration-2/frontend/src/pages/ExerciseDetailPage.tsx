import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getExerciseById } from '../services/apiService';
import type { ExerciseDetailDto } from '../types';
import { CategoryBadge } from '../components/CategoryBadge';
import { ExerciseFieldList } from '../components/ExerciseFieldList';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ExerciseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<ExerciseDetailDto | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const numId = id != null ? parseInt(id, 10) : NaN;
    if (Number.isNaN(numId)) {
      setExercise(undefined);
      setLoading(false);
      return;
    }
    getExerciseById(numId).then((ex) => {
      setExercise(ex);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (exercise == null) {
    return (
      <div className="space-y-4">
        <p className="text-error">Not found.</p>
        <Link to="/exercises" className="btn btn-primary">
          Back to Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/exercises" className="link link-hover text-sm">
        ← Back to Exercises
      </Link>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h1 className="card-title text-2xl">{exercise.name}</h1>
          <p className="text-base-content/70">{formatDate(exercise.date)}</p>
          {exercise.notes && (
            <p className="whitespace-pre-wrap">{exercise.notes}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {exercise.categories.map((cat) => (
              <CategoryBadge key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-lg">Details</h2>
          <ExerciseFieldList fields={exercise.fields} />
        </div>
      </div>
    </div>
  );
}
