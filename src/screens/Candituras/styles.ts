import { StyleSheet } from "react-native";


export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    color: theme === 'light' ? '#fff' : '#000',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
   
  },
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme === 'light' ? '#fff' : '#000'
  },
  title:{
     marginTop: 35, 
     fontSize: 31, 
     textAlign: 'center', 
     fontWeight: 'bold', 
     color: theme === 'light' ? '#fff' : '#000' 
  }
})