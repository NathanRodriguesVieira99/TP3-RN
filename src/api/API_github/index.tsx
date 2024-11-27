import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Loading } from '../../components/Loading'

import Projects from "~/screens/Projects";

import { GitHubProjectsProps } from "~/types/github";
import { useTheme } from "~/contexts/ThemeContext";

const GitHubProjects = () => {
  const [projects, setProjects] = useState<GitHubProjectsProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const username = 'NathanRodriguesVieira99'

  //fetch  
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=10`);

      const data: GitHubProjectsProps[] = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Erro ao buscar projetos', error);
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  const { theme } = useTheme()
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Projetos Recentes de {username}
      </Text>
      <Projects projects={projects} />
    </View>
  )

}


const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme === 'light' ? '#000' : '#fff',
  },
  title: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme === 'light' ? '#fff' : '#000',
    textAlign: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GitHubProjects