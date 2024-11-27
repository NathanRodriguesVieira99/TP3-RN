

import 'react-native-gesture-handler';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


import Routes from './src/routes';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from '~/contexts/ThemeContext';

export default function App() {

  const [fontesLoaded] = useFonts({

    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  if (!fontesLoaded) {
    return <Loading />
  }


  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
