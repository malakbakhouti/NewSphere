import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Bitcoin = async () => {
  const news = await getNewsSearch('books'); // news est déjà un tableau d'articles
  const articles = removeDuplicateData(news || []);

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


export default Bitcoin

