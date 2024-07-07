const QUERY_KEY = 'query';

export default class QueryStorge {
  static getQuery() {
    if (QueryStorge.isSavedQueryExist()) {
      return localStorage.getItem(QUERY_KEY) as string;
    }
    return '';
  }

  static saveQuery(query: string) {
    const preparedQuery = query.trim();
    localStorage.setItem(QUERY_KEY, preparedQuery);
  }

  static isSavedQueryExist() {
    return Boolean(localStorage.getItem(QUERY_KEY));
  }
}
