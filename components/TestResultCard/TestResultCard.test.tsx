import React from 'react';
import { render, screen } from '@testing-library/react';
import TestResultCard from './TestResultCard';
import { ScreenDetailsOne } from '../../test-utilities/api/data'; 

describe('TestResultCard', () => {
  it('renders the data from a single ScreenServiceRequest', () => {
    // Take just one request from serviceRequests array
    const singleRequest = ScreenDetailsOne.serviceRequests[0];

    // Render the component with that single request
    render(<TestResultCard request={singleRequest} />);
    expect(screen.getByText("Sample ID:")).toBeInTheDocument();
    expect(screen.getByText(singleRequest.sampleId)).toBeInTheDocument();

  });
});
