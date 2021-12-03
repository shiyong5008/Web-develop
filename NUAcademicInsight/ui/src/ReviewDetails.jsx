import React from 'react';
import graphQLFetch from './graphQLFetch.js';

export default class ReviewDetail extends React.Component {
  constructor() {
    super();
    this.state = { review: {} };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (prevId !== id) {
      this.loadData();
    }
  }

  async loadData() {
    const { match: { params: { id } } } = this.props;
    const query = `query review($id: Int!) {
      review (id: $id) {
        id answer2
} }`;
    const data = await graphQLFetch(query, { id });
    if (data) {
      this.setState({ review: data.review });
    } else {
      this.setState({ review: {} });
    }
  }

  render() {
    const {
      review: {
        answer1, answer2, answer3, answer4, additional,
      },
    } = this.state;
    return (
      <div>
        <h3>Review Details</h3>
        <pre>
          {answer2}
        </pre>
      </div>
    );
  }
}
