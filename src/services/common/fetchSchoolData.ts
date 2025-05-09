import { cache } from "react";

import apiServer from "../api-server";

export interface SchoolDataType {
  school: {
    name: string;
    province: string;
    logo: string;
    city: string;
    area: number;
    phone: string;
    stage: number;
    type: number;
    gender: number;
    type_obj: any;
    stage_obj: any;
    gender_obj: any;
    school_admins: any[];
    is_for_website: boolean;
    description?: string;
    address?: string;
  };
  panel: {
    id: number;
    domain: string;
    browser_title: string;
    primary_color: number;
    panel_title: string;
    sepecial: boolean;
    panel_text: string;
    auth_img: string;
    panel_type: number;
    sub_type: number;
    home_link: string | null;
    has_website: boolean;
    has_register: boolean;
    login_otp: boolean;
    login_username: boolean;
    has_sale_system: boolean;
    has_public_announcement_in_login: boolean;
    auth_text: string;
    show_madtalk_brand: boolean;
    enamad: string;
    show_download_app: boolean;
    educational_type: number;
    has_user_type_parent: boolean;
    has_teacher_assistants: boolean;
    school_field_is_show: boolean;
    has_academic_sale_system: boolean;
    password_hardness: number;
    need_reset_password: boolean;
    video_streaming_app: number;
    max_active_sessions: number | null;
    show_all_grades: boolean;
    valid_ip_addresses: string | null;
    has_user_type: boolean;
    font_name: string | null;
    school: number;
  };
}

export const fetchSchoolData = cache(
  async (): Promise<SchoolDataType | null> => {
    try {
      const data = await apiServer(
        "/management/school/all_data/",
        { school: 976 },
        false
      );
      if (data?.result) {
        return data.result;
      }
      return null;
    } catch {
      return null;
    }
  }
);
