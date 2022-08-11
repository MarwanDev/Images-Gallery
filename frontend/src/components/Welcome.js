/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="container-fluid bg-light text-dark p-5">
    <h1>Images Gallery</h1>
    <p>
      This is an app that retrieves photos using Unsplash API. Start searching
      by entering words in the input field.
    </p>
    <p>
      <Button
        variant="primary"
        href="https://unsplash.com"
        target="_blank"
      >Learn More</Button>
    </p>
  </div>
);
export default Welcome;
