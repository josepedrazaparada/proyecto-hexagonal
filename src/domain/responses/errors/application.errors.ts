import ApplicationResponse from '../ApplicationResponse';
import ErrorTypes from '../../enums/errorTypes.enum';
import ResponsesTypes from '../../enums/responses.natures';

class ApplicationError extends ApplicationResponse {
  constructor(type?: ErrorTypes) {
    super(ResponsesTypes.ERROR, type ? type : ErrorTypes.DEFAULT_ERROR);
  }
}

export default ApplicationError;
