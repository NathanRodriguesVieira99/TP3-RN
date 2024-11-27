
import { StyleSheet } from "react-native";

export const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  Container: {
    backgroundColor: theme === 'light' ? '#000000' : '#FFFFFF',
    flex: 1
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 50
  },
  bioContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: '8%',
    margin: 8
  },
  nameText: {
    color: theme === 'light' ? '#fff' : '#000',
    fontSize: 22
  },
  userName: {
    color: theme === 'light' ? '#cecece' : '#0a0a0a'
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: theme === 'light' ? '#fff' : '#000',
    borderWidth: 2,
    left:5
  },
  bio: {
    color: theme === 'light' ? '#fff' : '#000',
    top: 15,
    fontSize: 16
  },
  followingContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  following: {
    color: theme === 'light' ? '#cecece' : '#0a0a0a'
  },
  followers: {
    color: theme === 'light' ? '#cecece' : '#0a0a0a'
  }
})