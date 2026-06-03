// このファイルは実際のAPIレスポンスをもとに quicktype で自動生成しています。
// スキーマ変更時は以下コマンドで再生成してください：
// npx quicktype --src <レスポンスJSON> --src-lang json --lang ts --top-level BlogListResponse --just-types --no-date-times

export interface BlogListResponse {
  errors:   unknown[];
  messages: unknown[];
  list:     Article[];
  pageInfo: PageInfo;
}

export interface Article {
  topics_id:                number;
  ymd:                      string;
  contents_type:            number;
  contents:                 string;
  subject:                  string;
  topics_flg:               number;
  open_flg:                 number;
  regular_flg:              number;
  inst_ymdhi:               string;
  update_ymdhi:             string;
  topics_group_id:          number;
  slug:                     string;
  ai_postprocess_state:     string;
  group_nm:                 string;
  group_description:        string;
  contents_type_cnt:        number;
  contents_type_nm:         string;
  contents_type_slug:       null;
  contents_type_parent_nm:  null;
  category_parent_id:       null;
  contents_type_ext_col_01: null;
  contents_type_ext_col_02: null;
  contents_type_ext_col_03: null;
  contents_type_ext_col_04: null;
  contents_type_ext_col_05: null;
  contents_type_list:       number[];
}

export interface PageInfo {
  totalCnt:     number;
  perPage:      number;
  totalPageCnt: number;
  pageNo:       number;
  firstIndex:   number;
  lastIndex:    number;
  path:         string;
  param:        string;
  startPageNo:  number;
  endPageNo:    number;
}
