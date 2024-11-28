import { StyleSheet } from 'react-native';

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
  },
  iconTouchable: {
    position: 'absolute',
    top: 110,
    right: 20,
    zIndex: 2,
  },
  resumoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  resumoText: {
    fontSize: 22,
    padding: 5,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    color: theme === 'light' ? '#fff' : '#000'
  },
  htmlText: {
    color: '#f26629',
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  cssText: {
    color: '#1673b5',
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  scssText: {
    color: '#cc6699',
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  jsText: {
    color: '#f0da4f',
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  tsText: {
    color: '#007acc',
    fontWeight: 'bold',
  },
  reactText: {
    color: '#61d9fa',
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  btnProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnProfile: {
    marginTop: 20,
    padding: 10,
    backgroundColor: theme === 'light' ? '#369eff' : '#379eff',
    borderRadius: 5,
    alignItems: 'center',
    width: 200
  },
  btnProfileText: {
    color: theme === 'light' ? '#fff' : '#000',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily:'Montserrat_500Medium'
  },
});
