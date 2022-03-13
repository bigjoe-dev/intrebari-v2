import md5 from 'md5';
import Id from '../Id';
import buildMakeQuestion from './question';

const makeQuestion = buildMakeQuestion({ Id, md5 });

export default makeQuestion;
