import React from 'react';
import { Form } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Form method="post">
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export default Profile;
