import { SearchOptions } from './interfaces';

export const prepareSearchOptions = (
  searchOptions: Partial<SearchOptions>
): URLSearchParams => {
  const params = new URLSearchParams();
  Object.entries(searchOptions).forEach(([prop, value]) =>
    params.append(prop, value)
  );
  params.append('sortOrder', 'asc');
  return params;
};

export const formatSortCategory = (category: string): string =>
  category.replace('_', ' ').toUpperCase();
