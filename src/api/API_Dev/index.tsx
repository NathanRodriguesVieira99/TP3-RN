interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default async function FetchArticles(username: string): Promise<Article[]> {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar os artigos')
    }
    return await response.json() as Article[]
  } catch (error) {
    console.error('erro no fetch', error);
    throw error
  }
}