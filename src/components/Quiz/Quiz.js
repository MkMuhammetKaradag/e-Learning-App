import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import onlyPost from '../../hooks/usePost/onlyPost';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import {Radio, Center, NativeBaseProvider} from 'native-base';
import {Platform} from 'react-native';
const SCREEN_WİDTH = Dimensions.get('window').width;

const Quiz = ({examId, myApi}) => {
  const {loading, data, error, fetchData} = useFetch();
  const [exam, setExam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const myRef = React.useRef({});
  useEffect(() => {
    (async () => {
      await fetchData(`${myApi}/courses/get-exam-by-id/${examId}`);
    })();
  }, []);
  if (error) {
    return <Error></Error>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleNext = () => {
    setActiveIdx(activeIdx + 1);
    setAnswers([...answers, answer]);
    setAnswer('');
  };

  const handleFinish = async () => {
    const newAnswers = [...answers, answer];
    //console.log(newAnswers);
  };

  return (
    <View>
      {data.exam.isComplited ? (
        <View>
          <Text>Hello Sınav Girildi</Text>
        </View>
      ) : (
        data.exam.questions && (
          <View>
            {data.exam.questions.map(
              (question, idx) =>
                activeIdx == idx && (
                  <View>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginLeft: '10%',
                        marginBottom: 20,
                      }}>
                      <Text style={{color: '#fff'}}>
                        {idx + 1}) {'  '}
                      </Text>
                      <Text style={{color: '#fff'}}>{question.text}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      {question.type === 'OPEN_ENDED' && (
                        <TextInput
                          style={{
                            borderWidth: 1,
                            width: SCREEN_WİDTH * 0.8,
                            borderColor: '#fff',
                            color: '#fff',
                          }}
                          multiline
                          numberOfLines={4}
                          value={answer}
                          onChangeText={setAnswer}
                        />
                      )}
                      {question.type === 'MULTIPLE_CHOICES_SINGLE_ANSWER' && (
                        <Radio.Group
                          name="exampleGroup"
                          colorScheme="success"
                          accessibilityLabel="pick an option"
                          onChange={setAnswer}>
                          {question.options.map(option => (
                            <Radio
                              size="sm"
                              colorScheme="success"
                              value={option}
                              my={1}>
                              <Text style={{color: '#fff'}}>{option}</Text>
                            </Radio>
                          ))}
                        </Radio.Group>
                      )}
                    </View>
                    <View
                      style={{
                        height: 40,
                        alignItems: 'flex-end',
                        marginRight: 20,
                      }}>
                      {activeIdx === data.exam.questions.length - 1 ? (
                        <TouchableOpacity
                          disabled={answer.length === 0}
                          onPress={handleFinish}
                          style={{marginTop: 20}}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 18,
                              fontWeight: 'bold',
                            }}>
                            Bitir
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        // <Button
                        //   ></Button>

                        <TouchableOpacity
                          disabled={answer.length === 0}
                          onPress={handleNext}
                          style={{marginTop: 20}}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 18,
                              fontWeight: 'bold',
                            }}>
                            Sonraki
                          </Text>
                        </TouchableOpacity>
                        // <Button
                        //   disabled={answer.length === 0}
                        //   onPress={handleNext}
                        //   color="black"
                        //   title="Sonraki"></Button>
                      )}
                    </View>
                  </View>
                ),
            )}
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
