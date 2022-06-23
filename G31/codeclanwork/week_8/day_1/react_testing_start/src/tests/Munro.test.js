import React from 'react'
import MunroContainer from '../containers/MunroContainer';
import {render} from '@testing-library/react'


describe ('Munros', () => {

    let container;

    beforeEach(() => {
        jest.spyOn(global.console, 'error').mockImplementation((message) => {
            if (!message.includes('wrapped in act')) {
                // pass
            }
          });
          
        const mockData = [{name: "Fake News1"}] 
        const mockJsonPromise = Promise.resolve(mockData)
        const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

        container = render(<MunroContainer/>)
    })
    
    

    it('should have select with munros', () => {
        const munroOptions = container.findAllByTestId("munro-option")
        expect (munroOptions).toHaveLength(3);
    
        })
        

})
