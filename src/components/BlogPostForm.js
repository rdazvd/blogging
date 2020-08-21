import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        onChangeText={(userInput) => setTitle(userInput)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={(userInput) => setContent(userInput)}
        style={styles.input}
      />
      <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
