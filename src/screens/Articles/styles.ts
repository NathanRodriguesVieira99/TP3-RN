import { StyleSheet } from "react-native"

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    zIndex: 2
  },
  header: {
    position: 'relative',
    top: 30,
    textAlign: 'center',
    fontSize: 31,
    color: theme === 'light' ? '#fff' : '#000',
  },
  article: {
    top: 50,
    marginBottom: 10,
    backgroundColor: theme === 'light' ? '#fff' : '#0a0a0a',
  },
  title: {
    padding: 5,
    borderWidth: 1,
    borderColor: theme === 'light' ? '#0a0a0a' : '#ddd',
    color: theme === 'light' ? '#000' : '#fff',
    height: 46,
    backgroundColor: theme === 'light' ? '#fdfdfd' : 'transparent',
    margin: 5,  
  }
})
