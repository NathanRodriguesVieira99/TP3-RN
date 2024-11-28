import { View, Text, Image } from 'react-native';
import { getStyles } from './styles'
import { useTheme } from '~/contexts/ThemeContext';

export default function Profile() {
  const { theme} = useTheme()
  const styles = getStyles(theme)

  return (
    <View style={styles.Container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.nameText}>rato da silva</Text>
        <Text style={styles.userName}>@urubu123</Text>
        <Text style={styles.bio}>
          Estudante de Engenharia de Software, com conhecimento em HTML, CSS, SCSS ,JavaScript, TypeScript e ReactJs.
          Começando meus estudos em ReactNative, TailwindCSS e NextJs
        </Text>
        <View style={styles.followingContainer}>
          <Text style={styles.following}>
            Seguindo 35
          </Text>
          <Text style={styles.followers}>
            Seguidores 20
          </Text>
        </View>
      </View>
    </View>
  );
}