import { useEffect, useState, useMemo } from 'react';
import { getExercises, getCategories } from '../services/dataService';
import type { ExerciseListItemDto, CategoryDto } from '../types';
import { ExerciseCard } from '../components/ExerciseCard';

type DateFilter = 'all' | 'today' | 'week' | 'month';

function isInRange(dateStr: string, filter: DateFilter): boolean {
  if (filter === 'all') return true;
  const d = new Date(dateStr);
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekAgo = new Date(todayStart);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(todayStart);
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  if (filter === 'today')
    return d >= todayStart && d < new Date(todayStart.getTime() + 86400000);
  if (filter === 'week') return d >= weekAgo;
  if (filter === 'month') return d >= monthAgo;
  return true;
}

export function ExerciseListPage() {
  const [exercises, setExercises] = useState<ExerciseListItemDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [dateFilter, setDateFilter] = useState<DateFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getExercises(), getCategories()]).then(([ex, cat]) => {
      setExercises(ex);
      setCategories(cat);
      setLoading(false);
    });
  }, []);

  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      if (!isInRange(ex.date, dateFilter)) return false;
      if (categoryFilter.length === 0) return true;
      const exCategoryIds = ex.categories.map((c) => c.id);
      return categoryFilter.some((id) => exCategoryIds.includes(id));
    });
  }, [exercises, dateFilter, categoryFilter]);

  const toggleCategory = (id: number) => {
    setCategoryFilter((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Exercises</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="label">
            <span className="label-text font-medium">Date</span>
          </label>
          <select
            className="select select-bordered select-sm"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value as DateFilter)}
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <label key={cat.id} className="label cursor-pointer gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={categoryFilter.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                <span className="label-text">{cat.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {filteredExercises.length === 0 ? (
        <p className="text-base-content/70">No exercises match the filters.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredExercises.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  );
}
