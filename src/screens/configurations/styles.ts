import { StyleSheet } from "react-native";

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
  },
  iconTouchable: {
    position: 'absolute',
    top: 14,
    left: 130,
    zIndex: 2,
  },
  configButtonsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: 130,
    right: 130
  },
  configButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    gap: 7,
    color: theme === 'light' ? '#fff' : '#000',
  },
  textConfigButton: {
    color: theme === 'light' ? '#fff' : '#000',
    fontSize: 16,
    marginTop: 5
  },


})