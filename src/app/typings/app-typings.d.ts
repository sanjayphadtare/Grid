declare namespace app {
  interface MenuItem {
    label: string;
    value: string;
  }

  interface ApiResponse<T> {
    result: {
      statusCode: number,
      columns: [any],
      data: T
    };
  }

  interface HeadcountItem {
    position_id: string;
    approval_status: string;
    pending_with: string;
    ghrs_employee_id: string;
    employee_name: string;
    rate_amount: string;
    plan_start_date: string;
    position_end_date: string;
    employee_class: string;
    country_name: string;
    contract_type: string;
  }
}