import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: skyblue;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

const RecentPresenter = ({ data }) => {
  if (data.length === 0) {
    return <div>빈 배열</div>;
  }

  return (
    <>
      {data.map((item) => {
        return (
          <Card key={item.id}>
            <div>{item.title}</div>
            <div>{item.brand}</div>
            <div>{item.price}</div>
            <div>{item.liked ? '좋아요' : '싫어요'}</div>
          </Card>
        );
      })}
    </>
  );
};

export default RecentPresenter;
