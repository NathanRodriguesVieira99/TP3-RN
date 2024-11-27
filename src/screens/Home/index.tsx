import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import { useTheme } from '~/contexts/ThemeContext';
import { getStyles } from './styles';

import { RootStackParamList } from '../../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


export default function Home({ navigation }: Props) {
  const { theme, toggleTheme } = useTheme()

  const styles = getStyles(theme)

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={toggleTheme}
        >
          <Feather name={theme === 'light' ? 'sun' : 'moon'}
            size={40}
            color={theme === 'light' ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>


      <View style={styles.container}>
        <View>

          <View style={styles.resumoContainer}>
            <Text style={styles.resumoText}>
              Estudante de Engenharia de Software, com conhecimento em{' '}
              <Text style={styles.htmlText}>HTML</Text>,{' '}
              <Text style={styles.cssText}>CSS</Text>,{' '}
              <Text style={styles.scssText}>SCSS</Text>,{' '}
              <Text style={styles.jsText}>JavaScript</Text>,{' '}
              <Text style={styles.tsText}>TypeScript</Text> e{' '}
              <Text style={styles.reactText}>ReactJs{' '}</Text>...
            </Text>
          </View>


          <View style={styles.btnProfileContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.btnProfile}
            >
              <Text style={styles.btnProfileText}>Ir para Perfil Completo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
