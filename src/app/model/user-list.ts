
/**
 * Interface to save user detail
 */
 export interface UserList {
  userId    : string;
      firstName: string,
      middleName?: string,
      lastName: string, 
      email: string, 
      phoneNumber: number, 
      role: string, 
      address: string, 
      createdOn: string, 
      modifiedOn: string,
      isEdit: boolean,
      oldEntery?: boolean
  }
