import axios from "axios";
import { IArticleCard } from "./article.types";

export const articleService = {
  getQuotes: async (): Promise<IArticleCard[]> => {
    const { data } = await axios.get<IArticleCard[]>(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    return data;
  },
};


