import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableWithoutFeedback, StyleSheet, ViewPropTypes } from 'react-native';

class CoachmarkContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.message, this.props.messageStyle]}>
          <Text style={[styles.messageText, this.props.messageTextStyle]}>{this.props.message}</Text>
        </View>
        {this.props.skipable ? (
          <View style={[styles.button]}>
            <TouchableWithoutFeedback onPress={() => this.props.hide()}>
              <View style={[styles.button, this.props.buttonStyle]}>
                <Text style={[styles.buttonText, this.props.buttonTextStyle]}>OK</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonSeparator} />
            <TouchableWithoutFeedback onPress={() => this.props.skip()}>
              <View style={[styles.button, this.props.buttonStyle]}>
                <Text style={[styles.buttonText, this.props.buttonTextStyle]}>Skip</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <TouchableWithoutFeedback onPress={() => this.props.hide()}>
            <View style={[styles.button, this.props.buttonStyle]}>
              <Text style={[styles.buttonText, this.props.buttonTextStyle]}>OK</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  message: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.15,
  },
  button: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(246,246,246)',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgb(7, 112, 205)',
    fontWeight: 'bold',
  },
  buttonSeparator: {
    height: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(196,196,196,0.75)',
  },
});

CoachmarkContent.propTypes = {
  message: PropTypes.string.isRequired,
  messageStyle: ViewPropTypes.style,
  messageTextStyle: Text.propTypes.style,
  buttonStyle: ViewPropTypes.style,
  buttonTextStyle: Text.propTypes.style,
  skipable: PropTypes.bool,
  hide: PropTypes.func,
  skip: PropTypes.func,
};

CoachmarkContent.defaultProps = {
  messageStyle: {},
  messageTextStyle: {},
  buttonStyle: {},
  buttonTextStyle: {},
  skipable: false,
  hide: () => {}, // eslint-disable-line no-empty-function
  skip: () => {}, // eslint-disable-line no-empty-function
};

export default CoachmarkContent;
