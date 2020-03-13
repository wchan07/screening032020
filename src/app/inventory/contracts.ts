export interface CategoryResponse {
  categories: Map<string, string[]>;
}

export interface CategoryData {
  category: Category;
}

export interface Category {
  title: string;
  isVisible: boolean;
  items?: Item[];
}

export interface Item {
  title: string;
  count: number;
  type?: string;
}
