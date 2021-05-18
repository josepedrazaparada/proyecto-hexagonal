import SuccessResponses from '../enums/success.responses';
import ErrorResponses from '../enums/error.responses';
import SuccessTypes from '../enums/successTypes.enum';
import ErrorTypes from '../enums/errorTypes.enum';
import ResponsesNatures from '../enums/responses.natures';

const Responses = { ...SuccessResponses, ...ErrorResponses };

class ApplicationResponse {
  public message: string;
  public code: number;

  readonly type: string;
  readonly nature: ResponsesNatures;

  constructor(nature: ResponsesNatures, type: SuccessTypes | ErrorTypes) {
    this.nature = nature;
    this.message = Responses[type].message;
    this.code = Responses[type].code;
    this.type = type;
  }

  public getResponse = () => {
    return {
      message: this.message,
      code: this.code,
    };
  };
}

export default ApplicationResponse;
