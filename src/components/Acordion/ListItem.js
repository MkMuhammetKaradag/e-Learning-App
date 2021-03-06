import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#DEDEDE',
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,
    color: '#fff',
  },
  pointsContainer: {
    borderRadius: 8,

    padding: 5,
  },
});

const ListItem = ({sectionContent, isLast, setSection}) => {
  const bottomRadius = isLast ? 8 : 0;

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          setSection(sectionContent);
        }}>
        <Text style={styles.name}>{sectionContent.title}</Text>
      </TouchableOpacity>
      <View style={styles.pointsContainer}>
        {sectionContent.type === 'VIDEO' && (
          <ADIcon name="play" size={19} color="#fff"></ADIcon>
          // <Text style={styles.points}>{sectionContent.type}</Text>
        )}
        {sectionContent.type === 'QUIZ' && (
          <MAIcon name="help" size={20} color="#fff"></MAIcon>
        )}
        {sectionContent.type === 'TEXT' && (
          <MAIcon name="text-snippet" size={20} color="#fff"></MAIcon>
        )}
      </View>
    </View>
  );
};

export default ListItem;
