import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '~/contexts/ThemeContext';
import { getStyles } from './styles'



export default function Configurations() {
  const { theme, toggleTheme } = useTheme()
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={toggleTheme}
        >
          <Feather
            name={theme === 'light' ? 'sun' : 'moon'}
            size={40}
            color={theme === 'light' ? '#fff' : '#000'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.configButtonsContainer}>
        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="user"
            size={20} color={theme === 'light' ? '#fff' : '#000'}
          />
          <Text style={styles.textConfigButton}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="settings"
            size={20} color={theme === 'light' ? '#fff' : '#000'}
          />
          <Text style={styles.textConfigButton}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="star"
            size={20} color={theme === 'light' ? '#fff' : '#000'}
          />
          <Text style={styles.textConfigButton}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.configButton]}>
          <Feather name="trash-2"
            size={20}
            color={theme === 'light' ? '#fff' : '#000'}
          />
          <Text style={styles.textConfigButton}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}