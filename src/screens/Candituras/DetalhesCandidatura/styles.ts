import { StyleSheet } from "react-native";

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    margin: 10,
    color: theme === 'light' ? '#fff' : '#000'
  },
  desc: {
    fontSize: 18,
    margin: 10,
    color: theme === 'light' ? '#fff' : '#000'
  },
  status: {
    fontSize: 18,
    margin: 10,
    color: theme === 'light' ? '#fff' : '#000'
  }
})