import React from 'react';

export default function IssueDetail({ review }) {
  if (review) {
    return (
      <div>
        <h3>Review</h3>
        <pre>{review.answer2}</pre>
      </div>
    );
  }
  return null;
}