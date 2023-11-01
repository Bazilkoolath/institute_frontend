export enum Role {
    STUDENT='student',
    ADMIN='admin',
    SUBADMIN='subadmin',
    TEACHER='teacher',
}

export enum Auth {
    LOGIN = 'login',
    REGISTRATION = 'registration',
    FORGOT_PASSWORD = 'forgor_password',
    RESET_PASSWORD = 'reset_password',
}


export enum UserStatus {
    INVITED = 'invited',
    ACTIVE = 'active',
    INACTIVE = 'inactive'
  }