// Paginate

interface PaginateData {
  page?: number;
  search?: string;
  itemsPerPage?: number;
}

interface PaginateReturnData<T extends BaseDocument> {
  count: number;
  pages: number;
  inPage: number;
  itemsInPage: number;
  itemsPerPage: number;
  items: T[];
}

// Search

interface SearchData {
  search: string;
}
