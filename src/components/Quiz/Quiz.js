import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Button,
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
    console.log(newAnswers);
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
                    <View style={{alignItems: 'center'}}>
                      <Text>{idx + 1}</Text>
                      <Text>{question.text}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      {question.type === 'OPEN_ENDED' && (
                        <TextInput
                          style={{borderWidth: 1, width: SCREEN_WİDTH * 0.8}}
                          multiline
                          numberOfLines={4}
                          value={answer}
                          onChangeText={setAnswer}
                        />
                      )}
                      {question.type === 'MULTIPLE_CHOICES_SINGLE_ANSWER' && (
                        // <FormControl className="w-full">
                        //   <RadioGroup
                        //     aria-labelledby="demo-radio-buttons-group-label"
                        //     defaultValue="female"
                        //     name="radio-buttons-group"
                        //     value={answer}
                        //     onChange={e => setAnswer(e.target.value)}>
                        //     {question.options.map(option => (
                        //       <FormControlLabel
                        //         value={option}
                        //         key={option}
                        //         control={<Radio />}
                        //         label={option}
                        //       />
                        //     ))}
                        //   </RadioGroup>
                        // </FormControl>
                        <Radio.Group
                          name="exampleGroup"
                          colorScheme="success"
                          accessibilityLabel="pick an option"
                          onChange={setAnswer}>
                          {question.options.map(option => (
                            <Radio colorScheme="success" value={option} my={1}>
                              {option}
                            </Radio>
                          ))}
                        </Radio.Group>
                      )}
                    </View>
                    <View>
                      {activeIdx === data.exam.questions.length - 1 ? (
                        <Button
                          disabled={answer.length === 0}
                          onPress={handleFinish}
                          title="Bitir"></Button>
                      ) : (
                        <Button
                          disabled={answer.length === 0}
                          onPress={handleNext}
                          title="Sonraki"></Button>
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
