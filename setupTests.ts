
import * as Enzyme from "enzyme";
import { shallow, render, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

    configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;


/* Step to test the stte value inside function
1) npm install --save-dev enzyme enzyme-adapter-react-16   
2) npm install --save-dev @types/enzyme @types/enzyme-adapter-react-16
3) npm install --save-dev enzyme-to-json         
4) npm install react react-dom 
5) npm install --save-dev enzyme-to-json
6) add  "setupFiles": [
      "./setupTests.ts"
    ]

    to Jest section in package.json
5) (check) create setupTests.ts file
6) https://rjzaworski.com/2018/03/testing-with-typescript-react-and-enzyme
7) https://techdoma.in/react-js-testing/how-to-unit-test-state-of-the-component-using-jest-and-enzyme
*/