import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Balance from '../../components/Balance';
import Header from '../../components/Header'
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '400,90',
    data: '05/06/2022',
    type: 0 // Despesas
  },

  {
    id: 2,
    label: 'Pagamento Recebido',
    value: '2.500,00',
    data: '02/05/2022',
    type: 1 // Receita
  },

  {
    id: 3,
    label: 'Salário',
    value: '8.400,00',
    data: '22/04/2022',
    type: 1 // Receita
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Mateus Pessoa"/>

        <Balance saldo="8.250.90" gastos="-824,00"/>

        <Actions/>

        <Text style={styles.title}>Movimentações Recentes</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) =>  String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data={item}/> }
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },

  list:{
    marginStart: 17,
    marginEnd: 14,
  }
});
