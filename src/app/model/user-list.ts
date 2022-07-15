
/**
 * Interface to save user detail
 */
 export interface UserList {
  userId: string;
    FirstName: string,
    MiddleName?: string,
    LastName: string, 
    email: string, 
    phoneNumber: number, 
    role: string, 
    address: string, 
    createdOn: string, 
    modifiedOn: string
  }
