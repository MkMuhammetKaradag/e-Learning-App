import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import List from './List';

const list = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
    {name: 'Jacob Mullins', points: '$3.45'},
    {name: 'Jesus Lewis', points: '$3.45'},
    {name: 'Johnny Marr', points: '$2.56'},
  ],
};

const list2 = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
    {name: 'Jacob Mullins', points: '$3.45'},
  ],
};

const list3 = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

const Accordion = ({content, setSection}) => {
  console.log('acordion', content);
  return (
    <ScrollView style={styles.container}>
      {content && (
        <View>
          {content.sections
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <List section={item} />

              // <List list={list2} />
              // <List list={list3} />
              // <List {...{list}} />
              // <List {...{list}} />
            ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Accordion;
