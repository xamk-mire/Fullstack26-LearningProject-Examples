import type { CategoryDto } from '../types';

interface CategoryBadgeProps {
  category: CategoryDto | { name: string };
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return <span className="badge badge-neutral badge-sm">{category.name}</span>;
}
