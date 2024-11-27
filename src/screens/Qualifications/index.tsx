import { FlatList, Text, View } from "react-native";

import { getStyles } from "./styles";
import { useTheme } from "~/contexts/ThemeContext";

export default function Qualifications() {
  const skills = [
    { name: 'HTML', color: '#e6532e' },
    { name: 'CSS', color: '#2e53e6' },
    { name: 'SCSS', color: '#cf639b' },
    { name: 'TailwindCSS', color: '#4eb0b5' },
    { name: 'JavaScript', color: '#f7df25' },
    { name: 'TypeScript', color: '#087fcf' },
    { name: 'React', color: '#66dafa' },
    { name: 'React Native', color: '#00d9ff' },
    { name: 'NextJs', color: '#ffffff' },
    { name: 'Git', color: '#f0553a' },
  ];

  const certifications = [
    'TypeScript Developer - DIO',
    'ReactJs Developer - DIO',
    'JavaScript Developer - DIO',
  ];

  const { theme } = useTheme()
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Qualificações:</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <FlatList
          data={skills}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.skillItem}>

              <Text style={[styles.itemText, { color: item.color }]}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificações:</Text>
        <FlatList
          data={certifications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.certificationText}>{item}</Text>
          )}
        />
      </View>
    </View>
  );
}
