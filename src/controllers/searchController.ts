import { type NavigateFunction } from "react-router-dom";

export class SearchController {
  static handleSearch(keyword: string, navigate: NavigateFunction) {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) return;

    navigate(`/detail?search=${encodeURIComponent(trimmedKeyword)}`);
  }
}
