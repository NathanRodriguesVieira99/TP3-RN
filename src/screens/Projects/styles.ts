import { StyleSheet } from "react-native"

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({

  projectCard: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: theme === 'light' ? '#fff' : '#444',
    borderRadius: 8,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '600',
    color: theme === 'light' ? '#000' : '#fff',
  },
  projectDesc: {
    fontSize: 14,
    color: theme === 'light' ? '#0a0a0a' : '#ccc',
  },
  projectLink: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 5,
  },
})