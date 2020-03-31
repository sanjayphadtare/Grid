declare namespace app {
  interface MenuItem {
    label: string | number;
    value: string | number;
  }

  interface ApiResponse<T> {
    result: {
      statusCode: number;
      columns: [{title: string, 
        field: string, isFixed: boolean}];
      totalCount: number;
      data: T
    };
  }

  interface ApiRequest {
    pageNo: number;
    pageOffset: number;
    sortBy?: string;
    employeeId: number;
  }

  interface HeadcountItem {
    ctoolId: number;
    approvalStatusNm: string;
    pendingWithUserGroupNm: string;
    rolePositionId: number;
    resourcePositionId: number;
    recuritmentStatusNm: number;
    employeeId: number;
    employeeFullName: string;
    roleStartDt: string;
    roleEndDt: string;
    contractEndDate: string;
    ecTerminationDate: string;
    employmentCategory: string;
    employmentSubCategory: string;
    countryNm: string;
    locationNm: string;
    highCostFlg: boolean;
    justificationForHighCostRoleNm: string;
    buildingDsc: string;
    buildingCd: string;
    bf3LevelNm: string;
    bf4LevelNm: string;
    bf5LevelNm: string;
    ccNm: string;
    leCd: string;
    hireTypeNm: string;
    roleActionPlanNm: string;
    outcomeForIndividualNm: number;
    managementTeamMemberId: number;
    managementTeamMemberNm: number;
    functionalManagerId: number;
    entityManagerNm: number;
    vendorCategoryNm: number;
    vendorNm: string;
    contractTypeNm: number;
    maxDayRateNbr: number;
    skillDsc: string;
    jobFamilyNm: number;
    jobSubFamilyNm: number;
    jobCategoryNm: number;
    gradeId: number;
    equivalentGradeId: number;
    positionTitleTxt: string;
    globalJobCd: string;
    equivalentGlobalJobCd: string;
    activeRoleFlag: string;
    renewalFlag: string;
    approvalChannelNm: number;
    itcmApprovelRejectReasonNm: number;
    itcmRemarksTxt: string
  }
}