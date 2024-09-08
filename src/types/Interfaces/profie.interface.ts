export interface IIssues {
  /**
   * user head and neck experience .
   * all values are true and false
   */
  headAndNeck: boolean;
  /**
   * user torso experience .
  
   */
  torso: boolean;
  /**
   * user pelvis experience .
  
   */
  pelvis: boolean;
  /**
   * user arms experience .
  
   */
  arms: boolean;
  /**
   * user legs experience .
  
   */
  legs: boolean;
}
// Purpose: User interface defines the personal details.

export interface IRatings {
  /**
   * user physio experience .
   * all numbers are between 1 and 5
   */
  physiotherapist: number;
  /**
   * user chiro experience .
   */
  chiropractor: number;
  /**
   ** user osteopath experience .
   */
  osteopath: number;
  /**
   * user myotherapist experience .
   */
  myotherapist: number;
  /**
   * user remedial experience .
   */
  remedialMessageTherapist: number;
  /**
   * user acupunturist experience .
   */
  acupuncturist: number;
}
// Purpose: User interface defines the personal details.

export interface IPersonalDetails {
  /**
   * image: User's image .
   */
  image: { secure_url: string };
  /**
   * issues: User's issues .
   */
  issues: string[];
  /**
   * location: User's location .
   */
  location: string;
  /**
   * date of birth: User's date of birth .
   */
  dob: string;
  /**
   * gender: User's gender .
   */
  gender: string;
}

export interface ICancer {
  /**
   * diagnoed: user's condition of cancer .
   */
  diagnosed: boolean;
  /**
   * location: User's location .
   */
  location: string;
  /**
   * specifiedTreatment: User's treatment type .
   */
  specifiedTreatment: string;
  /**
   * wish: any suggestions .
   */
  wish: string;
}

export interface IPayment {
  /**
   * bsb: user's bsb number .
   */
  bsb: number;
  /**
   * holderName: account holder name .
   */
  holderName: string;
  /**
   * accountNumber: users' account number .
   */
  accountNumber: number;
}
