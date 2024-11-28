import { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '~/contexts/ThemeContext';
import { getStyles } from './styles'
import FetchArticles from '~/api/API_Dev';
import { Loading } from '~/components/Loading';


interface Article {
  id: number
  title: string
}


export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  const { theme } = useTheme()
  const styles = getStyles(theme)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await FetchArticles('srbhr')
        setArticles(data)
      } catch (error) {
        console.error('Erro ao buscar artigos', error);
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Artigos Publicados
      </Text>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.article}
              >
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}