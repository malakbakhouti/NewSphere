import { getNewsSearch } from '@/api';
import Article from '@/components/Article';
import { removeDuplicateData } from '@/utils';
import type { NewsResponse } from '@/types';

const BooksPage = async () => {
  const articles = removeDuplicateData(await getNewsSearch('books') || []);

  return (
    <div className="w-[700px]">
      {articles.length === 0 ? (
        <p>Aucun article trouvé.</p>
      ) : (
        articles.map((article, idx) => (
          <div key={`${article?.title}-${idx}`}>
            <Article data={article} />
          </div>
        ))
      )}
    </div>
  );
};


export default BooksPage;




