import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from '~/contexts/ThemeContext';
import { getStyles } from './styles';


type RootStackParamList = {
  DetalhesCandidatura: {
    desc: string;
    status: string;
  };
};

type Props = StackScreenProps<RootStackParamList, 'DetalhesCandidatura'>;

export default function DetalhesCandidatura({ route, navigation }: Props) {
  const { desc } = route.params;
  const { status } = route.params;

  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhe sua candidatura:</Text>
      <Text style={styles.status}>Status: {status}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}