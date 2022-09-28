import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Abalfazl,
  AbbaskaAlam,
  AbbaskiSawari,
  AeyNeher,
  AlamAbbaska,
  Alambardar,
  Bekasi,
  Bhaikalasha,
  BusGhazi,
  ChaltaRahe,
  GhameHussain,
  GhareebeZahra,
  Hazratimam,
  HussainJanam,
  Hussaintere,
  JaAliAsghar,
  Janahai,
  Janesakina,
  KaisayMain,
  MaheMuharram,
  MatameShabbir,
  MatamKaro,
  MazloomHussain,
  MolaRotay,
  NaBhoolay,
  QatlGhazika,
  SaatQadam,
  Sadarahay,
  SakinaBibi,
  SakinaShamke,
  SaqqaeSakina,
  ShabbirkeChehre,
  ShameGareeban,
  Shehzadiyan,
  ShimrKanjar,
  SultaneKarbala,
  Taboot,
  TaweezeHassan,
  UjarGaye,
  Yaghazi,
  ZainabZainab,
  ZakhmChupana,
} from '../../components';

const Noha = () => {
  const [name, setName] = useState('');
  const arr = [1];
  const start = async () => {
    try {
      const response = await AsyncStorage.getItem('noha');
      setName(JSON.parse(response));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    start();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Lyrics</Text>
      {arr.map((ele, ind) => {
        switch (name.reciter) {
          case 'alijee':
            switch (name.noha) {
              case 'abbaskisawari':
                return <AbbaskiSawari key={ind} />;
              case 'janesakina':
                return <Janesakina key={ind} />;
              default:
                return <Yaghazi key={ind} />;
            }
          case 'alishanawar':
            switch (name.noha) {
              case 'jaaliasghar':
                return <JaAliAsghar key={ind} />;
              default:
                return <Janahai key={ind} />;
            }
          case 'farhanali':
            switch (name.noha) {
              case 'abbaskaalam':
                return <AbbaskaAlam key={ind} />;
              case 'ghamehussain':
                return <GhameHussain key={ind} />;
              case 'hussaintere':
                return <Hussaintere key={ind} />;
              case 'kaisaymain':
                return <KaisayMain key={ind} />;
              case 'saatqadam':
                return <SaatQadam key={ind} />;
              case 'sadarahay':
                return <Sadarahay key={ind} />;
              case 'shamegareeban':
                return <ShameGareeban key={ind} />;
              case 'ujargaye':
                return <UjarGaye key={ind} />;
              default:
                return <ZainabZainab key={ind} />;
            }
          case 'irfanhaider':
            switch (name.noha) {
              case 'busghazi':
                return <BusGhazi key={ind} />;
              case 'hussainjanam':
                return <HussainJanam key={ind} />;
              case 'matameshabbir':
                return <MatameShabbir key={ind} />;
              case 'nabhoolay':
                return <NaBhoolay key={ind} />;
              case 'qatlghazika':
                return <QatlGhazika key={ind} />;
              default:
                return <Shehzadiyan key={ind} />;
            }
          case 'mesumabbas':
            switch (name.noha) {
              case 'alamabbaska':
                return <AlamAbbaska key={ind} />;
              case 'matamkaro':
                return <MatamKaro key={ind} />;
              case 'sakinashamke':
                return <SakinaShamke key={ind} />;
              case 'saqqaesakina':
                return <SaqqaeSakina key={ind} />;
              case 'taboot':
                return <Taboot key={ind} />;
              default:
                return <TaweezeHassan key={ind} />;
            }
          case 'mirhassanmir':
            switch (name.noha) {
              case 'abalfazl':
                return <Abalfazl key={ind} />;
              case 'bekasi':
                return <Bekasi key={ind} />;
              case 'bhai':
                return <Bhaikalasha key={ind} />;
              case 'mahemuharram':
                return <MaheMuharram key={ind} />;
              case 'molarotay':
                return <MolaRotay key={ind} />;
              case 'shimrkanjar':
                return <ShimrKanjar key={ind} />;
              default:
                return <ZakhmChupana key={ind} />;
            }
          case 'nadeemsarwar':
            switch (name.noha) {
              case 'aeyneher':
                return <AeyNeher key={ind} />;
              case 'alambardar':
                return <Alambardar key={ind} />;
              case 'chaltarahe':
                return <ChaltaRahe key={ind} />;
              case 'hazratimam':
                return <Hazratimam key={ind} />;
              default:
                return <MazloomHussain key={ind} />;
            }
          default:
            switch (name.noha) {
              case 'ghareebezahra':
                return <GhareebeZahra key={ind} />;
              case 'sakinabibi':
                return <SakinaBibi key={ind} />;
              case 'shabbirkechehre':
                return <ShabbirkeChehre key={ind} />;
              default:
                return <SultaneKarbala key={ind} />;
            }
        }
      })}
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    minHeight: '100%',
  },
  heading: {
    fontSize: 22,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default Noha;
