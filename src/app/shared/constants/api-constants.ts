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
    getStudentDetail:"admin/get-student-detail",
    getTeacherList:"admin/get-teacher-list/",
    getTeacherDetail:"admin/get-teacher-detail/",
    createExam:"admin/create-exam",
    createBatch:"admin/create-course-batch",
    getBatchList:"admin/get-batch-list/",
    getBatchDetail:"admin/get-batch-detail/",
    getExamList:"admin/get-exam-list/",
    getExamDetail:"admin/get-exam-detail/",
    createResult:"admin/create-result/",
    results:"admin/get-result-list/",
    getResultDetail:"admin/get-result-detail/",
    createAnnouncement:"admin/create-announcement/",
    geAnnouncement:"admin/get-announcement-list/",
    adminDashboard:"admin/dashboard/",
    adminProfileUpdate:"admin/update-me/",
    studentProfileUpdate:"student/update-me/",
    teacherrofileUpdate:"teacher/update-me/",
    complaintRegister:"student/complaint-register",
    deleteStudent:"admin/delete-student",
    deleteTeacher:"admin/delete-teacher",
    deleteBatch:"admin/delete-batch",
    deleteExam:"admin/delete-exam",
    deleteAnnouncement:"admin/delete-announcement",
    deleteComplaint:"admin/delete-complaint",
    getComplaintLst:"student/complaint-register"



})