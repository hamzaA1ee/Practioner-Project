// Purpose: User interface defines the personal details.



export interface IPersonalDetails {
  /**
   * image: User's image .
   */
  image: {secure_url:string};
    /**
   * issues: User's issues .
   */
  issues:string[]
    /**
   * location: User's location .
   */
  location:string;
    /**
   * date of birth: User's date of birth .
   */
  dob:string
    /**
   * gender: User's gender .
   */
  gender:string

 
}

