
import { StyleSheet } from "react-native";

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme === 'light' ? '#000000' : '#ffffff',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: theme === 'light' ? '#fff' : '#000'
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme === 'light' ? '#fff' : '#000'
  },
  skillItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    marginTop: 5,
    color:  theme === 'light' ? '#000' : '#fff',
    fontWeight: 'bold'
  },
  certificationText: {
    fontSize: 16,
    color: theme === 'light' ? '#fff' : '#000',
    marginBottom: 5,
  },
});