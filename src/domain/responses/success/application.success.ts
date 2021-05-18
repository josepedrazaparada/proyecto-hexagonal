import ApplicationResponse from '../ApplicationResponse';
import SuccessTypes from '../../enums/successTypes.enum';
import ResponsesTypes from '../../enums/responses.natures';

class ApplicationSuccess extends ApplicationResponse {
  private payload: any;

  constructor(payload: any, type?: SuccessTypes) {
    super(ResponsesTypes.SUCCESS, type ? type : SuccessTypes.DEFAULT_SUCCESS);
    this.payload = payload ? payload : null;
  }

  public getResponse = () => {
    return {
      message: this.message,
      code: this.code,
      payload: this.payload
    };
  };
}

export default ApplicationSuccess;
