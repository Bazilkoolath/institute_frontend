export const api_constants = Object.freeze({
     //auth APIs
    register:"register/",
    login:"login/",
    forget_password:"forget_password/",
    reset_password:"reset_password/",
    change_password:"change_password/",
    get_access_token:"get_access_token/",
    userInfo:"user-info/",
    // user APIs
    getUserDetail:"contact-users/",
    postUserDetail:"contacts-users/",
    updateUserDetail:"contacts/contact_update/",
    SendbusinessEmailVerificationLink:"send-email",
    businessEmailVerification:"verify",
    // sendResetPasswordLink:"reset-password-email",
    resetPasswordVerify:"reset-password-verify",
    updateFile:"image_upload/",
    //organizations APIs
    organization:"organizations/",
    //buyer APIs
    buyer:"buyer/",
    // hyperscaler APIs
    hyperscaler:"hyperscaler/",
    hyperscaler_detail:"hyperscaler/organization_detail/",
    hyperscaler_category_filter:"hyperscaler/category_filter/",
    // isv APIs
    isv:"isv/",
    isv_detail:"isv/isv_name/",
    isv_with_organization_detail:"isv/organization_detail/",
    isv_category_filter:"isv/category_filter/",
    // si APIs
    si:"si/",
    si_detail:"si/si_name/",
    si_with_organization_detail:"si/organization_detail/",
    si_category_filter:"si/category_filter/",
    seller_detail:"seller/seller_detail/",
    // product APIs
    products:"products/",
    product_detail:"products/product_name/",
    // service APIs
    services:"services/",
    service_detail:"service/",
    service_category_filter:"services/category_filter/",
    // search APIs
    serach_all:"search_filter/all/",
    search_product_by_isv:"search/products/",
    search_service_by_isv_product:"search/services/",
    // get all category (isv, si, service) APIs
    categories:"unique_categories",
    // rfp APIs
    RfpList:"rfp/",
    rfp:"rfpheaders/",
    rfp_by_buyer:"buyer/rfpheaders/",
    rfp_by_seller:"seller/rfpheaders/",
    getSupplierResponseByRFP:"supplier_responses/",
    fileAttachments:"buyer_attachments/",
    draft_rfp:"draft_rfp/",
    rfpLiatByBuyer:"real_rfps/",
    getRfpBySi_id:"rfpheaderss/sisinvited",
    // supplie Response
    supplier_rfp_responses:"supplier_rfp_responses/",
    supplier_response_by_siId_and_RfpId:"supplier_response/",
    // decline_supplier_rfp_responses
    decline_supplier_rfp_responses:"decline_supplier_rfp_responses/",
    solution:"solutions/",
    seller_solutions:"seller/solutions/",
    project:"casestudies/",
    seller_projects:"seller/casestudies/",
    partner:"partnerships/",
    seller_partner:"seller/partnerships/",
    insight:"insights/",
    seller_insight:"seller/insights/"
})