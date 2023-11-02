export const api_constants = Object.freeze({
     //auth APIs
    inviteAdmin:"auth/invite-admin",
    inviteTeacher:"auth/invite-teacher",
    inviteStudent:"auth/invite-student",
    register:"register/",
    login:"auth/login/",
    setPassword:"auth/set-password/",
    forgetPassword:"forget_password/",
    resetPassword:"reset_password/",
    changePassword:"change_password/",
    // user APIs
    getUserDetail:"auth/profile/",
    getStudentList:"admin/get-student-list/",
    getTeacherList:"admin/get-teacher-list/",
    getTeacherDetail:"admin/teacher-detail/",
    createExam:"admin/create-exam",
    createBatch:"admin/create-course-batch",
    getBatchList:"admin/get-batch-list/",
    getBatchDetail:"admin/get-batch-detail/",
    getExamList:"admin/get-exam-list/",
    getExamDetail:"admin/get-exam-detail/",
})