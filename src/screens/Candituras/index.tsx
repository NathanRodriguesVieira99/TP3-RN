import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '~/contexts/ThemeContext';
import { getStyles } from './styles';

interface Candidatura {
  id: string;
  vaga: string;
  status: string;
  desc: string;
}

const candidaturas: Candidatura[] = [
  { id: '1', vaga: 'Desenvolvedor Frontend', status: 'Em andamento', desc: 'Você passou para a proxima fase, parabens!' },
  { id: '2', vaga: 'Desenvolvedor Backend', status: 'Aprovado', desc: 'Parabens voce foi aprovado!!' },
  { id: '3', vaga: 'UX/UI', status: 'Rejeitado', desc: 'Infelizmente nao será possivel continuar essa aplicaçãod e vaga...' },
];

export default function Candidaturas() {
  const navigation = useNavigation<any>();

  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({ item }: { item: Candidatura }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetalhesCandidatura', { id: item.id, status: item.status, desc: item.desc })}>
      <View style={styles.card}>
        <Text style={{
          fontSize: 18,
          color: theme === 'light' ? '#fff' : '#0a0a0a'
        }}>
          {item.vaga}
        </Text>
        <Text style={{
          color: theme === 'light' ? '#fff' : '#0a0a0a'
        }}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Candidaturas</Text>
      <FlatList
        data={candidaturas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}